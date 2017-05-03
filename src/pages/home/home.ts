import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';
import { ApiService } from '../../providers/api-service';
import { Storage } from '@ionic/storage';
import { Global } from '../../services/global/global';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public storage:Storage,public global:Global,public rest:ApiService,public authData:AuthData) {
  }
  getResult(){
    var object=this.global.object;
    var pos={'lat':0,'lon':0};
    this.storage.ready().then(()=>{
      this.storage.get('location').then(val=>{
        if(val!=null){
            pos=val;
            console.log('Loaded'+ val);
        }
      });
    });
    object.lat=pos.lat;
    object.lon=pos.lon;
    this.rest.getSolarDetails(object);
  }
  logout(){
  this.authData.logoutUser().then( authData => {
            this.navCtrl.setRoot(Login);
      }, error => {
        alert('Error Logging Out');
    });
  }

}
