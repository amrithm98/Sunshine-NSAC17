import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddItem } from '../add-item/add-item';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountForm');
  }
  Save()
  {
    this.navCtrl.setRoot(AddItem);
  }

}
