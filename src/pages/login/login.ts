import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../providers/api-service';

/**
 * Generated class for the Login page.
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  users: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restapiService: ApiService) {

  }
  login()
  {
    console.log('clicked');
    this.restapiService.login('podai');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
