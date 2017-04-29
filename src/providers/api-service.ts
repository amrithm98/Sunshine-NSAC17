import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
let apiUrl = 'https://randomuser.me/api/';
@Injectable()
export class ApiService {

  constructor(public http: Http) {
    console.log('Hello ApiService Provider');
  }
  login(name) {
    console.log(name)
    this.http.get(apiUrl).map(res => res.json()).subscribe(data=>{
      console.log(data.results)
    });
  }
  
}
