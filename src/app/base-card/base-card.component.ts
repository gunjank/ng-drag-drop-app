import { Component, OnInit, Input } from '@angular/core';
import { CardData } from '../model/cardData';
import { MockDataService } from '../mock-data.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.css']
})
export class BaseCardComponent implements OnInit {
  @Input() cardData:CardData;
  isWebViewEdit:boolean=false;

  constructor(private configService: ConfigService) {
    
   }

  ngOnInit() {
  }
  deleteMe($event: any, c:CardData){
    this.configService.deleteResultConfig(c.internalId,0);
  }

  editWebView(){
    if(this.cardData.url && !this.cardData.readyToDrop){
      this.isWebViewEdit=true;
    }
    
  }

  imageClickHandler(c:CardData){
    if(!this.cardData.readyToDrop){
      console.log(c.url);
      if(c.url !==undefined && c.url !== null){
        window.open(c.url, "_blank");
      }else{
        window.open("/mixpanel.html", "_blank");
      }
      
    }
   
  }

}
