import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class BrandBaseService {

  constructor(public http: Http ) {
      console.log('AdminConfig SERVICE WORKING');
  }

    getbrandtrending(daterange){
        console.log('Brand Date Range'+ daterange);
        return this.http.get(`${environment.brandtrending}`)
            .map(res => res.json());
    }

}
