import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddItem } from '../add-item/add-item';
import { Item } from '../item/item';
import { Storage } from '@ionic/storage';
import { Global } from '../../services/global/global'

/**
 * Generated class for the CountForm page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */ 
@IonicPage()
@Component({
  selector: 'page-count-form',
  templateUrl: 'count-form.html',
})
export class CountForm {
  brand;
  output_max;
  rooms;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,public global:Global) {
    this.brand=global.specs.brand;
    this.output_max=global.specs.output_max;
    this.rooms=global.specs.rooms;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountForm');
  }
  Save()
  {
    this.storage.ready().then(() => {
      var obj={'brand':this.brand,'output_max':this.output_max,'rooms':this.rooms}
       this.storage.set('specs',obj);
     });
    this.navCtrl.setRoot(Item);
  }

}
