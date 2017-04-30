import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker';
import { ApiService } from '../../providers/api-service';
import { Storage } from '@ionic/storage';
import { Global } from '../../services/global/global';
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

  constructor(public rest:ApiService,public storage:Storage,public global:Global,public navCtrl: NavController, public navParams: NavParams,public locationTracker: LocationTracker) {
    this.storage.ready().then(()=>{
      this.storage.get('object').then(val=>{
        if(val!=null){
            this.global.object=val;
        }
      });
    });
  }
  start(){
    this.locationTracker.startTracking();
  }
  stop(){
    this.locationTracker.stopTracking();
  }
  getSolarDetails(){
    var object=this.global.object;
    var pos={'lat':0,'lon':0};
    this.storage.ready().then(()=>{
      this.storage.get('location').then(val=>{
        if(val!=null){
            pos=val;
            object.lat=pos.lat;
            object.lon=pos.lon;
            alert('Loaded'+ JSON.stringify(val));
        }
      });
    });
    
    this.rest.getSolarDetails(object);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Data');
  }

}
