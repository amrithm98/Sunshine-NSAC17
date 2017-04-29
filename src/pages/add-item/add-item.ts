import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Global } from '../../services/global/global';

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

	param1 = "";
	param2 = "";
	param3 = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: Global) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItem');
  }

  submitItem() {
  	var obj = {"p1": this.param1, "p2": this.param2, "p3": this.param3};
  	console.log(obj);
  	this.global.items.push(obj);
  	this.navCtrl.pop();
  }

}
