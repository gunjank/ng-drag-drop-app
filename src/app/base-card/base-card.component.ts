import { Component, OnInit, Input } from '@angular/core';
import { CardData } from '../model/cardData';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.css']
})
export class BaseCardComponent implements OnInit {
  @Input() cardData:CardData;

  constructor(private mockDataService: MockDataService) {
    

   }

  ngOnInit() {
  }
  deleteMe($event: any, c:CardData){
    this.mockDataService.deleteResultConfig(c.internalId,0);
  }

}
