import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-admin-view',
  templateUrl: './login-admin-view.component.html',
  styleUrls: ['./login-admin-view.component.css']
})
export class LoginAdminViewComponent implements OnInit {

  constructor(private  router:Router) { }

  ngOnInit() {
  }

    loginAdmin(admin)
    {
        admin.preventDefault();
        console.log(admin);
        var adminusername = admin.target.elements[0].value;
        var adminpassword = admin.target.elements[1].value;
        console.log(adminusername,adminpassword);
        if(adminusername == 'admin' && adminpassword == 'admin'){
            this.router.navigate(['admin']);
        }
    }
}
