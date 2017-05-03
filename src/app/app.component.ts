import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup'
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import { AngularFire } from 'angularfire2';
import { AuthData } from '../providers/auth-data';
import { Item } from '../pages/item/item';
import { AddItem } from '../pages/add-item/add-item';
import { Global } from '../services/global/global';
import { Data } from '../pages/data/data';
import { CountForm } from '../pages/count-form/count-form';
import { SolarSpecs } from '../pages/solar-specs/solar-specs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any=Login;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,public storage:Storage,public splashScreen: SplashScreen,public af: AngularFire,public global:Global){
    this.initializeApp();
    storage.ready().then(()=>{
      storage.get('firstTime').then(val=>{
        if(val!=null){
            this.global.firstTime=val;
            console.log('Loaded'+ val);
        }
      });
      storage.get('deviceList').then(val=>{
        if(val!=null){
        this.global.items=val;
        console.log('LoadedDevice'+ val);
        }
      });
      storage.get('location').then(val=>{
        console.log('Location'+ val);
      });
      storage.get('specs').then(val=>{
        if(val!=null){
        console.log('specs'+ val);
        this.global.specs=val;
        }
        // this.global.brand=val.brand;
        // this.global.output_max=val.output_max;
        // this.global.rooms-val.rooms;
      });
    });
    const authObserver = af.auth.subscribe( user => {
    if (user) {
      if(global.firstTime){
          this.rootPage = CountForm;
      }
      else
      {
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      }

    } else {
      this.rootPage = Login;
      authObserver.unsubscribe();
    }
  });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: Login },
      { title: 'Profile', component: Data },
      { title: 'Device List', component: Item },
      { title: 'Solar Specs', component: SolarSpecs },

    ];

  } 

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
