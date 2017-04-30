import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Global } from '../../services/global/global';
import { ApiService } from '../../providers/api-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SolarSpecs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-solar-specs',
  templateUrl: 'solar-specs.html',
})
export class SolarSpecs {
  lat : any;
	lon : any;
	module_type : any;
	array_type : any;
	losses : any;
	tilt : any;
	azimuth : any;
	system_capacity:any;
  constructor(public navCtrl: NavController,public global:Global,public storage:Storage ,public navParams: NavParams,public restApi:ApiService) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SolarSpecs');
  }
  submitItem() {
		var object={'array_type':this.array_type,'azimuth':this.azimuth,'api_key':'LGAK2a4oDwS8mXHxhHHmTRGKZSXOZLxdHURFJF6g',
      'lat':0,'lon':0,'tilt':this.tilt,'system_capacity':this.system_capacity,'module_type':this.module_type,'losses':this.losses
  	};
		this.global.object=object;
		this.storage.ready().then(()=>{
      this.storage.set('object',object);
  	});
  	console.log(object);
  	// this.global.items.push(obj);
  	// this.navCtrl.pop();
  }

}
