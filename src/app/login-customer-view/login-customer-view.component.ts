import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-customer-view',
  templateUrl: './login-customer-view.component.html',
  styleUrls: ['./login-customer-view.component.css']
})
export class LoginCustomerViewComponent implements OnInit {


  constructor(private  router:Router) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    console.log(e);
    var phonenumber = e.target.elements[0].value;
    console.log(phonenumber);
    if(phonenumber == '9781909865068') {
      this.router.navigate(['checkout']);
    }
  }


}
