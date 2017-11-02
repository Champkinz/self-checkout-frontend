import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class BrandBaseService {

  constructor(public http: Http ) {
      console.log('AdminConfig SERVICE WORKING');
  }

    getbrandtrending(){
        console.log('TRENDING brand');
        return this.http.get(`${environment.itemtrending}`)
            .map(res => res.json());
    }

}
