import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolarSpecs } from './solar-specs';

@NgModule({
  declarations: [
    SolarSpecs,
  ],
  imports: [
    IonicPageModule.forChild(SolarSpecs),
  ],
  exports: [
    SolarSpecs
  ]
})
export class SolarSpecsModule {}
