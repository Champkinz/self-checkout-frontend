import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckoutViewComponent} from "./checkout-view/checkout-view.component";
import {LoginCustomerViewComponent} from './login-customer-view/login-customer-view.component';
import {RouterModule, Routes} from '@angular/router';
import {CheckoutViewCustomerComponent} from './checkout-view-customer/checkout-view-customer.component';
import {LoginAdminViewComponent} from './login-admin-view/login-admin-view.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {BillRecieptComponent} from './bill-reciept/bill-reciept.component';


const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: LoginCustomerViewComponent},
    {path: 'checkouts', component: CheckoutViewComponent},// remove at end of product
    {path: 'adminlog', component: LoginAdminViewComponent},
    {path: 'admin', component: AdminViewComponent},// remove at end of product
    {path: 'bill', component: BillRecieptComponent},// remove at end of product
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
export class AppRoutingModule {
}
