import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

@Injectable()
export class AuthData {
    fireAuth: any;
    constructor(public af: AngularFire) {
        af.auth.subscribe( user => {
            if (user) {
                this.fireAuth = user.auth;
                console.log(user);
            }
        });
    }
    loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.af.auth.login({ email: newEmail, password: newPassword });
    }
    resetPassword(email: string): firebase.Promise<any> {
      return firebase.auth().sendPasswordResetEmail(email);
    }
    logoutUser(): firebase.Promise<any> {
      return this.af.auth.logout();
    }
    signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.af.auth.createUser({ email: newEmail, password: newPassword });
    }


} 