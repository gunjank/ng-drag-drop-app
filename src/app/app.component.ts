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
  basePanelData: PanelData = new PanelData();
  private httpResponseData: HttpResponseData;
  private fetchConfigResponse: HttpResponseData;
  title = 'Drag & Drop';


  constructor(private mockDataService: MockDataService, public configService: ConfigService) {
    this.basePanelData = mockDataService.getBasePanel();
  }

  ngOnInit() {


    this.configService.fetch().
      subscribe(
        res => {
          if (res.data != null && res.data.length > 0) {
            this.configService.resultConfig = res.data,
            this.setMaxId(res.data)
          }
        },
        error => console.log("Error :: " + error)
      );
  }
  setMaxId(a: Array<PanelData>) {
    let maxId = 0;
    a.forEach(p => {
      if(maxId<p.internalId){maxId=p.internalId};
      if(p.availableCards.length>0){
        p.availableCards.forEach(c=>{
          if(maxId<c.internalId){maxId=c.internalId};
        })
      }
    });
    this.configService.setUniqueId(maxId);
    console.log("maxId "+maxId);
  }

  updatePreviewPanel($event: any, p: PanelData) {
    let cardData: CardData = Object.assign({}, $event.dragData);
    if (cardData.readyToDrop) {
      cardData.readyToDrop = false;
      cardData.internalId = this.configService.getUniqueId();
      p.availableCards.push(cardData);
    }
  }

  saveConfig() {
    if (this.configService.resultConfig.length > 0) {
      this.configService.save(this.configService.resultConfig)
        .subscribe(httpResponseData => this.httpResponseData)

    } else {
      alert("No cards added !!");
    }
  }
  createPanel() {
    let p: PanelData = new PanelData();
    p.type = "C1";
    p.internalId = this.configService.getUniqueId();
    this.configService.resultConfig.push(p);
  }
}


