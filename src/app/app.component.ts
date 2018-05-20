import { Component } from '@angular/core';
import { PanelData } from './model/panelData';
import { MockData } from './model/mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  availablePanels : Array<PanelData> = [];
  resultPanel:PanelData = new PanelData();
  
  title = 'Drag & Drop';
  constructor() {
    let m:MockData = new MockData();
    this.availablePanels = m.getListOfPanels();
    this.resultPanel.name = "Preview";
 

  }
}


