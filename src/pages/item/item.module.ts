import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Item } from './item';

@NgModule({
  declarations: [
    Item,
  ],
  imports: [
    IonicPageModule.forChild(Item),
  ],
  exports: [
    Item
  ]
})
export class ItemModule {}
