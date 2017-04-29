import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker';
/**
 * Generated class for the Data page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class Data {

  constructor(public navCtrl: NavController, public navParams: NavParams,public locationTracker: LocationTracker) {
  }
  start(){
    this.locationTracker.startTracking();
  }
  stop(){
    this.locationTracker.stopTracking();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Data');
  }

}
