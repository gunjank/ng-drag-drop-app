import { Component, OnInit } from '@angular/core';
import { PanelData } from './model/panelData';
import { CardData } from './model/cardData';
import { MockDataService } from './mock-data.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

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


  title = 'Drag & Drop';
  constructor(private mockDataService: MockDataService) {

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
    if(this.resultConfig.length>0){
      alert(JSON.stringify(this.resultConfig));
    }else{
      alert("No cards added !!");
    }
   
  }
}


