import { Injectable } from '@angular/core';
import { PanelData } from './model/panelData';
import { CardData } from './model/cardData';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  //private panelData: Array<object> = [{name:"My Money",type:"P1"}];
  private cardData: Array<object> = [{name:"Accounts", type:"P1"},{name:"Transactions",type:"P1"},
  {name:"Recent Transactions",type:"P1"},{name:"Quotes",type:"P1"},{name:"Sign Out",type:"P1"}];

  constructor() { }

  private resultConfig:Array<PanelData>=[];

  public getBasePanel(){
      let p:PanelData = new PanelData();
      p.name="Main";
      p.type ="P1";
      p.baseType=true;
      p.availableCards =this.getListOfCards(p.type);
      return p;

      
  }
  public getListOfCards = function (panelType:string) {
      let res:Array<CardData>=[];
      this.cardData.forEach(item => {
          if(panelType===item.type){
              let p:CardData = new CardData();
              p.name = item.name;
              p.type = item.type;
              res.push(p);
          }
      });
      return res;
  }
  public getResultConfig(){
      return this.resultConfig;
  }
  public setResultConfig(p:PanelData){
      this.resultConfig.push(p);
  }
}
