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
  previewPanelType:string = "P1";
 
 // availableCards :Array<CardData> = [];
  constructor() {
this.previewPanelType="P1";

   }

  ngOnInit() {

  }

  dragSuccessHandler($event: any) {
    let cardData: CardData = $event.dragData;
    console.log(cardData.name+" "+cardData.type);
    //orderedProduct.quantity--;
}
checkPanelType(){
 return  (this.panelData.type==="P1")?true:false;
}

}
