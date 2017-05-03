import { NgModule,ErrorHandler } from '@angular/core';
import { IonicPageModule,IonicErrorHandler } from 'ionic-angular';
import { Login } from './login';
import { ApiService } from '../../providers/api-service.ts';
@NgModule({
  declarations: [
    Login,
  ],
  imports: [
    IonicPageModule.forChild(Login),
  ],
  exports: [
    Login
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ApiService]
})
export class LoginModule {}
