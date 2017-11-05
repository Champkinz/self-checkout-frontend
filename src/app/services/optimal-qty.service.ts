import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class OptimalQtyService {

    constructor(public http: Http) {
        console.log('Optimal Order Qty SERVICE WORKING');
    }

    getOptimalOrderQty(daterange) {
        console.log('Optimal Order Qty Date Range' + daterange);
        return this.http.get(`${environment.optimalorderqty}`)
            .map(res => res.json());
    }

}
