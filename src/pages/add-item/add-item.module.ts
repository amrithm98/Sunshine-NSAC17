import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItem } from './add-item';

@NgModule({
  declarations: [
    AddItem,
  ],
  imports: [
    IonicPageModule.forChild(AddItem),
  ],
  exports: [
    AddItem
  ]
})
export class AddItemModule {}
