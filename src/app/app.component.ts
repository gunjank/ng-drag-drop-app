import { Component } from '@angular/core';
import { PanelData } from './model/panelData';
import { MockData } from './model/mockData';
import { CardData } from './model/cardData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  availablePanels: Array<PanelData> = [];
  resultPanel: PanelData = new PanelData();
  //availableCards: Array<CardData> = [];

  title = 'Drag & Drop';
  constructor() {
    let m: MockData = new MockData();
    this.availablePanels = m.getListOfPanels();
    this.resultPanel.name = "Preview";


  }

  updatePreviewPanel($event: any) {
    let cardData: CardData = $event.dragData;
    this.resultPanel.availableCards.push(cardData);

  }

  showConfig(){
    if(this.resultPanel.availableCards.length>0){
      alert(JSON.stringify(this.resultPanel));
    }
   
  }
}


