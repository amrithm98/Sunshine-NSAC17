import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Data } from './data';

@NgModule({
  declarations: [
    Data,
  ],
  imports: [
    IonicPageModule.forChild(Data),
  ],
  exports: [
    Data
  ]
})
export class DataModule {}
