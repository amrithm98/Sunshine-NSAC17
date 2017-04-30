import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddItem } from '../add-item/add-item';
import { Item } from '../item/item';
import { Storage } from '@ionic/storage';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountForm');
  }
  Save()
  {
    this.storage.ready().then(() => {
       this.storage.set('brand', this.brand);
       this.storage.set('output_max', this.output_max);
       this.storage.set('rooms', this.rooms);
     });
    this.navCtrl.setRoot(Item);
  }

}
