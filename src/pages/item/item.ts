import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddItem } from '../../pages/add-item/add-item';
import { Global } from '../../services/global/global';

/**
 * Generated class for the Item page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class Item {

	addOneItem: any;
	values = [{}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: Global) {
  	this.addOneItem = AddItem;
  	this.values = this.global.items;
  	// console.log(global);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Item');
  }

  addItem() {
  	this.navCtrl.push(this.addOneItem);
  	// console.log(this.global);
  }

}