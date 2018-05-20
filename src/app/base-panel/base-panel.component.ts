import { Component, OnInit, Input } from '@angular/core';
import {PanelData} from '../model/panelData';
import { MockData } from '../model/mockData';
import { CardData } from '../model/cardData';

@Component({
  selector: 'app-base-panel',
  templateUrl: './base-panel.component.html',
  styleUrls: ['./base-panel.component.css']
})
export class BasePanelComponent implements OnInit {

  @Input() panelData: PanelData;
  availableCards :Array<CardData> = [];
  constructor() {


   }

  ngOnInit() {
    let m:MockData = new MockData();
    let panelType:string = this.panelData.type;
    m.getListOfCards().forEach(item=>{
      if(item.type===panelType){
        this.availableCards.push(item);
      }
    });
  }

}
