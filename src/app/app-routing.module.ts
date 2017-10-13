import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutViewComponent } from "./checkout-view/checkout-view.component";
import { LoginCustomerViewComponent } from './login-customer-view/login-customer-view.component';
import {RouterModule, Routes} from '@angular/router';
import { CheckoutViewCustomerComponent } from './checkout-view-customer/checkout-view-customer.component';
import { LoginAdminViewComponent } from './login-admin-view/login-admin-view.component';



const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: LoginCustomerViewComponent},
  {path: 'checkouts', component: CheckoutViewComponent},
  {path: 'adminlog', component: LoginAdminViewComponent},
  {path: 'checkout', component: CheckoutViewCustomerComponent}, // remove at end of product


  // otherwise redirect to 404
  // {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
