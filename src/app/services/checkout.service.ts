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
      return this.http.get(`${environment.producturl}` + productid)
          .map(res => res.json());
  }

  sendBillDetails(arrObj): Observable<any[]> {

        console.log('object eka: '+ JSON.stringify(arrObj));
      // console.log('obj mobile: '+arrObj[0].mobile);
        let data = {"mobile" : "0777123458", "date" : "2017-01-18", "product":[{"product_id": "A001", "name" : "Apple", "category" : "Fruit", "brand" : "local"},{"product_id": "A002", "name" : "Orange", "category" : "Fruit", "brand" : "local"},{"product_id": "A003", "name" : "PineApple", "category" : "Fruit", "brand" : "local"}]};



      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});

      let url = `${environment.checkouturl}`;

      // console.log('inside service class' + JSON.stringify(arrObj));
      // console.log('URL:'+ url);

      return this.http
          .post(url, JSON.stringify(arrObj), options)
          .map(res => res.json());


  }
}
