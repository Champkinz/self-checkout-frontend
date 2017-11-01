import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CheckoutService {

  constructor(public http: Http) {
      console.log('Product SERVICE WORKING');
  }

  getProductDetails(productid){
      console.log('userendtered Product: ' + productid);
      return this.http.get(`${environment.producturl}?id=` + productid)
          .map(res => res.json());
  }

  sendBillDetails(arrObj) {
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});

      // this.http.post(`${environment.producturl}add`, JSON.stringify(arrObj),options).map(res => res.json());
      console.log('inside service class' + JSON.stringify(arrObj));
      return false;
  }
}
