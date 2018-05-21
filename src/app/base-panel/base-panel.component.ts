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

  constructor(private mockDataService: MockDataService) {
    this.previewPanelType = "P1";
    
  }

  ngOnInit() {

  }

  dragSuccessHandler($event: any) {
    let cardData: CardData = $event.dragData;
    console.log(cardData.name + " " + cardData.type);
  }
  createPanel() {
    let p:PanelData = new PanelData();
    p.type = "C1";
    this.mockDataService.setResultConfig(p);
  }



}
