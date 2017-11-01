import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from '../services/login-service.service';
import {userdetails} from '../data/user';


@Component({
    selector: 'app-login-customer-view',
    templateUrl: './login-customer-view.component.html',
    styleUrls: ['./login-customer-view.component.css']
})
export class LoginCustomerViewComponent implements OnInit {
    userdetes:userdetails[];

    errorphone:string;


    constructor(private  router: Router, private  loginService:LoginServiceService) {
    }

    tele:string;

    ngOnInit() {


    }

    loginUser(e) {
        // e.preventDefault();
        // console.log(e);
        // var phonenumber = e.target.elements[0].value;
        // console.log(phonenumber);
        // if (phonenumber == '9781909865068') {
        //     this.router.navigate(['checkout']);
        // }
        e.preventDefault();
        console.log(e.target.elements[0].value);
        this.loginService.validateUser(e.target.elements[0].value).subscribe((users) => {
            this.userdetes = users;console.log('down');console.log(this.userdetes);
            if (this.userdetes.length === 0) {
                console.log('NO NUMBER FOUND');
                this.errorphone = 'Please Re-Enter The Phone Number';
            }else {
                let val:string;
                val = users[0].phone;
                console.log('loginarea');
                console.log(val);
                localStorage.setItem("phonenumber",val);
                this.router.navigate(['checkout']);
            }
        });
    }




}

// interface userdetails{
//     id:string,
//     name:string,
//     phone:string
// }
