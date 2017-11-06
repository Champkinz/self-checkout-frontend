import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";
import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class LoginServiceService {
    root = 'https://jsonplaceholder.typicode.com/users';
    public name: string;
    constructor(public http: Http) {
        console.log('LOGIN SERVICE WORKING');
    }

    validateUser(userPhoneNumber) {
        // let headers = new Headers({'Content-Type':'application/json'});
        // let options = new RequestOptions({headers: headers});
        console.log('userendtered '+userPhoneNumber);

        return this.http.get(`${environment.customerurl}` + userPhoneNumber)
            .map(res => res.json());

    }
}
