import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { CheckoutViewCustomerComponent } from './checkout-view-customer/checkout-view-customer.component';
import { AppComponent } from './app.component';
import { CheckoutViewComponent } from './checkout-view/checkout-view.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {CheckoutViewModule} from "./checkout-view/checkout-view.module";
import { LoginCustomerViewComponent } from './login-customer-view/login-customer-view.component';
import { LoginAdminViewComponent } from './login-admin-view/login-admin-view.component';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MatToolbarModule} from '@angular/material';
import { AdminViewComponent } from './admin-view/admin-view.component';
import {MatSidenavModule} from '@angular/material';
import { SmthComponent } from './smth/smth.component';
import { BillRecieptComponent } from './bill-reciept/bill-reciept.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginCustomerViewComponent,
    CheckoutViewCustomerComponent,
    LoginAdminViewComponent,
    AdminViewComponent,
    SmthComponent,
    BillRecieptComponent
],
  imports: [
      FormsModule,
    MatSidenavModule,
    BrowserModule,
    CdkTableModule,
    FlexLayoutModule,
    MatCardModule,
    LayoutModule,
    MatTableModule,
    MatMenuModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatCheckboxModule,
    CheckoutViewModule,
    MatToolbarModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
