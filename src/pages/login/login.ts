import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
import { ApiService } from '../../providers/api-service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { HomePage } from '../home/home';
import { EmailValidator } from '../../validators/email';
import { SignupPage } from '../signup/signup';
import { CountForm } from '../count-form/count-form';

import {Global} from '../../services/global/global'
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
  loginForm: any;
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restapiService: ApiService,public authData: AuthData,
  public formBuilder: FormBuilder, public alertCtrl: AlertController,
  public loadingCtrl: LoadingController,public global:Global) {
    this.loginForm = formBuilder.group({
    email: ['', Validators.compose([Validators.required, 
        EmailValidator.isValid])],
    password: ['', Validators.compose([Validators.minLength(6), 
    Validators.required])]
  });
} 
  loginUser(){
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email, 
        this.loginForm.value.password).then( authData => {
          if(this.global.firstTime)
          {
                this.navCtrl.setRoot(CountForm);
          }
          else
          {
                this.navCtrl.setRoot(HomePage);
          }
    }, error => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
          {
            text: "Ok",
            role: 'cancel'
          }
          ]
    });
      alert.present();
    });
  });

  this.loading = this.loadingCtrl.create({
    dismissOnPageChange: true,
  });
  this.loading.present();
  }
}
goToResetPassword(){
    // this.navCtrl.push(ResetPasswordPage);
}

createAccount(){
    this.navCtrl.push(SignupPage);
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
