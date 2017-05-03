import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddItem } from '../../pages/add-item/add-item';
import { Global } from '../../services/global/global';
import { HomePage } from '../home/home';

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
  maximum : any;
	current : number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public global: Global) {
  	this.addOneItem = AddItem;
  	this.values = this.global.items;
  	console.log(global);
  }
  ionViewDidLoad() {
    this.maximum = 1000;
    console.log('ionViewDidLoad Item');
  }
  Done()
  {
    alert('You Have Chosen Your Device List');
    this.navCtrl.setRoot(HomePage);
  }
  addItem() {
  	this.navCtrl.push(this.addOneItem);
  	// console.log(this.global);
  }
  f(key) {
  	// console.log(key);
  	// console.log(this.global.items);
  	var arr = [];
  	// console.log(key);
  	this.current = 0;
  	console.log(this.global.items);
  	for (key in this.global.items) {
  		var temp = this.global.items[key];
  		// console.log(parseInt(temp.cons));
  		if (temp.cons) {
  			this.current += parseInt(temp.cur) * parseInt(temp.power);
  			if (this.current > this.maximum) {
  				alert("Maximum limit exceeded");
  			}
  		} else {
  			arr.push(key);
  		}
  	}
  	console.log(arr);
  	for (var i = 0; i < arr.length; i++) {
  		var temp = this.global.items[arr[i]];
  		temp.cur = "0";
  		while (1) {
  			console.log("FDF");
  			console.log(this.current);
	  		if (parseInt(temp.cur) < parseInt(temp.count) && this.current + parseInt(temp.power) <= this.maximum) {
	  			temp.cur = (parseInt(temp.cur) + 1).toString();
	  			this.current += parseInt(temp.power);
	  		}
	  		else
	  			break;
  		}
  	}
  }

}