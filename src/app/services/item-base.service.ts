import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class ItemBaseService {

  constructor(public http: Http) {
      console.log('ItemBase SERVICE WORKING');
  }

  getItemTrending(daterange){
    console.log('daterangeinserve'+ daterange);
      return this.http.get(`${environment.itemtrending}`)
          .map(res => res.json());
  }

  getItemInformation(daterange, itemcode) {
      console.log('details in service'+ daterange, itemcode);
      return this.http.get(`${environment.iteminfo}` + itemcode)
          .map(res => res.json());
  }

}
