import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class AdminConfigService {

  constructor(public http: Http) {
      console.log('AdminConfig SERVICE WORKING');
  }

  sendAdminConfig(config){
      let headers = new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions({headers: headers});

      // this.http.post(`${environment.adminconfig}add`, JSON.stringify(arrObj),options).map(res => res.json());
      console.log('inside service class' + JSON.stringify(config));
  }

}
