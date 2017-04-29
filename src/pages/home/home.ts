import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public authData:AuthData) {
  }
  logout(){
  this.authData.logoutUser().then( authData => {
            this.navCtrl.setRoot(Login);
      }, error => {
        alert('Error Logging Out');
    });
  }

}
