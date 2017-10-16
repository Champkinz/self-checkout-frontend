import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {MatInputModule} from '@angular/material';
import { LoginCustomerViewComponent } from './login-customer-view.component';
import {MatFormFieldModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    LoginCustomerViewComponent
],
  imports: [
    BrowserModule,
    NgModule,
    MatInputModule,
    FlexLayoutModule,
    MatFormFieldModule,
    LayoutModule
  ],
  providers: [],
})
export class loginmodule { }
