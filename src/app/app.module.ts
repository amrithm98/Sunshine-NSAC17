import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ApiService } from '../providers/api-service';
import { HttpModule } from '@angular/http';
import { AuthData } from '../providers/auth-data';
import { AngularFireModule,AuthProviders, AuthMethods } from 'angularfire2';
import { Item } from '../pages/item/item';
import { AddItem } from '../pages/add-item/add-item';
import { Global } from '../services/global/global';
import { CountForm } from '../pages/count-form/count-form';

export const firebaseConfig = {
    apiKey: "AIzaSyC9WxLU3MOk8KKWXhxVmj5OQHyzuiIVjOs",
    authDomain: "sunshine-9af74.firebaseapp.com",
    databaseURL: "https://sunshine-9af74.firebaseio.com",
    projectId: "sunshine-9af74",
    storageBucket: "sunshine-9af74.appspot.com",
    messagingSenderId: "57330794556"
};
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    SignupPage,
    Item,
    AddItem,
    CountForm
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    SignupPage,
    Item,
    AddItem,
    CountForm
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Global,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiService,AuthData ]
})
export class AppModule {}
