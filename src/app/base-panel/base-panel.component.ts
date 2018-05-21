import { Component, OnInit, Input } from '@angular/core';
import { PanelData } from '../model/panelData';
import { CardData } from '../model/cardData';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-base-panel',
  templateUrl: './base-panel.component.html',
  styleUrls: ['./base-panel.component.css']
})
export class BasePanelComponent implements OnInit {

  @Input() panelData: PanelData;
  previewPanelType: string = "P1";
  isHeaderEdit:boolean=false;


  constructor(private mockDataService: MockDataService) {
    this.previewPanelType = "P1";
    
  }

  ngOnInit() {

  }

  dragSuccessHandler($event: any) {
    let cardData: CardData = $event.dragData;
    console.log(cardData.name + " " + cardData.type);
  }
  editHeader(){
    if(!this.panelData.baseType){
      this.isHeaderEdit=true;
    }
    
  }




}
