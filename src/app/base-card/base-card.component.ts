import { Component, OnInit, Input } from '@angular/core';
import { CardData } from '../model/cardData';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.css']
})
export class BaseCardComponent implements OnInit {
  @Input() cardData:CardData;

  constructor() {


   }

  ngOnInit() {
  }

}
