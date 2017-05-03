import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Global } from '../services/global/global'
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
let apiUrl = 'https://randomuser.me/api/';
@Injectable()
export class ApiService {

  constructor(public http: Http,public global:Global) {
    console.log('Hello ApiService Provider');
  }
  login(name) {
    console.log(name)
    this.http.get(apiUrl).map(res => res.json()).subscribe(data=>{
      console.log(data.results)
    });
  }
  getSolarDetails(object)
  {
    var base_url="https://developer.nrel.gov/api/pvwatts/v5.json?api_key=LGAK2a4oDwS8mXHxhHHmTRGKZSXOZLxdHURFJF6g";
    var query="&lat="+String(object.lat)+"&lon="+String(object.lon)+"&azimuth="+String(object.azimuth)+"&system_capacity="+String(object.system_capacity)+"&tilt="+String(object.tilt)+"&array_type="+String(object.array_type)+"&module_type="+String(object.module_type)+"&losses="+String(object.losses)+"&dataset=intl";
    var url=base_url+query;
    alert(url);
    this.http.get(url).map(res => res.json()).subscribe(data=>{
      alert(JSON.stringify(data));
      this.global.response=data;
    },err => {
      alert(err);
        console.log("Oops!");
    });
  }
  
}
