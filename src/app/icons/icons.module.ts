import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconTrash2 } from 'angular-feather';

const icons = [
  IconTrash2
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    icons
  ],
  declarations: []
})
export class IconsModule { }
