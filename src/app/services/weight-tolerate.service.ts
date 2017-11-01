import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class WeightTolerateService {

  constructor(public http: Http) {
      console.log('Weight SERVICE WORKING');
  }

  getWeightTolerance() {
      console.log('weight of scale in service');
      return this.http.get(`${environment.weighturl}`)
          .map(res => res.json());
  }

}
