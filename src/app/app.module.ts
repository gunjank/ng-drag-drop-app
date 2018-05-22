import { DndModule } from 'ng2-dnd/ng2-dnd';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SimpleDndComponent } from './simple-dnd/simple-dnd.component';
import { BaseCardComponent } from './base-card/base-card.component';
import { BasePanelComponent } from './base-panel/base-panel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from './icons/icons.module';




@NgModule({
  declarations: [
    AppComponent,
    SimpleDndComponent,
    BaseCardComponent,
    BasePanelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    DndModule.forRoot(),
    FormsModule,
    HttpClientModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

