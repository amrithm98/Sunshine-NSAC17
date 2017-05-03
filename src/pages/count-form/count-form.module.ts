import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountForm } from './count-form';

@NgModule({
  declarations: [
    CountForm,
  ],
  imports: [
    IonicPageModule.forChild(CountForm),
  ],
  exports: [
    CountForm
  ]
})
export class CountFormModule {}
