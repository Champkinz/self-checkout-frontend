import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class CustomerBaseService {

  constructor(public http: Http) {
      console.log('ItemBase SERVICE WORKING');
  }

  getCustomerSuggestion(daterange) {
      console.log('daterangeinserve'+ daterange);
      return this.http.get(`${environment.customersuggestion}`)
          .map(res => res.json());
  }
}
