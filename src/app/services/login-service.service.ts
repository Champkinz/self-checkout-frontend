import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {log} from "util";


@Injectable()
export class LoginServiceService {
    root = 'https://jsonplaceholder.typicode.com/users';
    public name: string;
    constructor(public http: Http) {
        console.log('LOGIN SERVICE WORKING');
    }

    validateUser(userPhoneNumber) {
        console.log('userendtered '+userPhoneNumber);

        return this.http.get(this.root+'?phone=' + userPhoneNumber)
            .map(res => res.json());

    }
}
