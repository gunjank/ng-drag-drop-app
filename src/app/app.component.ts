import { Component, OnInit } from '@angular/core';
import { PanelData } from './model/panelData';
import { CardData } from './model/cardData';
import { MockDataService } from './mock-data.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ConfigService } from './config.service';
import { HttpResponseData } from './model/httpResponseData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  basePanelData:PanelData=new PanelData();
  resultPanel: PanelData = new PanelData();
  resultConfig:Array<PanelData>=[];
  private _data = new BehaviorSubject<PanelData[]>([]);
  private httpResponseData: HttpResponseData;

  title = 'Drag & Drop';
  constructor(private mockDataService: MockDataService,private configService:ConfigService) {

    this.basePanelData = mockDataService.getBasePanel();
    // this.resultPanel.name = "Preview";
    // this.resultPanel.type = "R1";
  }

  ngOnInit(){
    this._data.subscribe(x=>{
        this.resultConfig = this.mockDataService.getResultConfig();
    });
  }

  updatePreviewPanel($event: any, p:PanelData) {
    let cardData: CardData = Object.assign({},$event.dragData);
    if(cardData.readyToDrop){
      cardData.readyToDrop = false;
      p.availableCards.push(cardData);
    }
   

  }

  showConfig(){
    // if(this.resultConfig.length>0){
    //   alert(JSON.stringify(this.resultConfig));
    // }else{
    //   alert("No cards added !!");
    // }
   
    if(this.resultConfig.length>0){
        this.configService.save(this.resultConfig)
            .subscribe(httpResponseData => this.httpResponseData)
             
    }else {
        alert("No cards added !!");
    } 
  }
  createPanel() {
    let p:PanelData = new PanelData();
    p.type = "C1";
    this.mockDataService.setResultConfig(p);
  }
}


