import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BillService {

    root = 'https://jsonplaceholder.typicode.com/posts';

    constructor(public http: Http) {
        console.log('BILL SERVICE WORKING');
    }

    getPost(g) {
        console.log(g);
        return this.http.get(this.root+'?userId=' + g)
            .map(res => res.json());
    }
}
