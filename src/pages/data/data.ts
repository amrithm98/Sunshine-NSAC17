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
  obj:any;
  constructor(public rest:ApiService,public storage:Storage,public global:Global,public navCtrl: NavController, public navParams: NavParams,public locationTracker: LocationTracker) {
    this.obj=this.global.response;
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
    if(object.module_type=="Standard"){
      object.module_type="0";
    }
    else if(object.module_type=="Premium"){
      object.module_type="1";
    }
    else{
      object.module_type="2";
    }
    if(object.array_type=="Fixed - Open Rack"){
      object.array_type="0";
    }
    else if(object.array_type=="Fixed - Roof Mounted"){
      object.array_type="1";
    }
    else if(object.array_type=="1-Axis"){
      object.array_type="2";
    }
    else if(object.array_type=="2-Axis"){
      object.array_type="4";
    }
    else{
      object.array_type="3";
    }
    var pos={'lat':0,'lon':0};
    this.storage.ready().then(()=>{
      this.storage.get('location').then(val=>{
        if(val!=null){
            pos=val;
            object.lat=pos.lat;
            object.lon=pos.lon;
        }
      });
    });
    this.rest.getSolarDetails(object);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Data');
  }

}
