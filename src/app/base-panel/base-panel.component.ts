import { Component, OnInit, Input } from '@angular/core';
import { PanelData } from '../model/panelData';
import { CardData } from '../model/cardData';
import { MockDataService } from '../mock-data.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-base-panel',
  templateUrl: './base-panel.component.html',
  styleUrls: ['./base-panel.component.css']
})
export class BasePanelComponent implements OnInit {

  @Input() panelData: PanelData;
  isHeaderEdit:boolean=false;
  constructor(private configService: ConfigService) {
  }

  ngOnInit() {

  }

  dragSuccessHandler($event: any) {
    let cardData: CardData = $event.dragData;
    console.log(cardData.name + " " + cardData.type);
  }
  editHeader(){
    if(!this.panelData.isBase){
      this.isHeaderEdit=true;
    }
    
  }

  deleteMe($event: any, p:PanelData){
    this.configService.deleteResultConfig(0,p.internalId);
  }




}
