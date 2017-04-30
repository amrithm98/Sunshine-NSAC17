import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Global } from '../../services/global/global';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { Item } from '../item/item';

/**
 * Generated class for the AddItem page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItem {

	device = "";
	power = "";
	count = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: Global,public storage: Storage) {
      this.storage.ready().then(() => {
        console.log(this.global.items);
       this.storage.set('firstTime',false);
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItem');
  }

  submitItem() {
  	var obj = {"device": this.device, "power": this.power, "count": this.count};
    this.global.items.push(obj);  	
    this.storage.ready().then(() => {
        console.log(this.global.items);
       this.storage.set('deviceList',this.global.items);
     });
    this.navCtrl.setRoot(Item);
  }

}
