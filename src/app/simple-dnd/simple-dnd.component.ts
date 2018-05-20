import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-dnd',
  templateUrl: './simple-dnd.component.html',
  styleUrls: ['./simple-dnd.component.css']
})
export class SimpleDndComponent implements OnInit {

  simpleDrop: any = null;
  constructor() { }

  ngOnInit() {
  }

}
