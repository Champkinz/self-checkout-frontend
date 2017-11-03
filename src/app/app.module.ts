import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {CheckoutViewCustomerComponent} from './checkout-view-customer/checkout-view-customer.component';
import {AppComponent} from './app.component';
import {CheckoutViewComponent} from './checkout-view/checkout-view.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {CheckoutViewModule} from "./checkout-view/checkout-view.module";
import {LoginCustomerViewComponent} from './login-customer-view/login-customer-view.component';
import {LoginAdminViewComponent} from './login-admin-view/login-admin-view.component';
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
import {AdminViewComponent} from './admin-view/admin-view.component';
import {MatSidenavModule} from '@angular/material';
import {SmthComponent} from './smth/smth.component';
import {BillRecieptComponent} from './bill-reciept/bill-reciept.component';
import {BillService} from './bill-reciept/bill.service';
import {HttpModule} from '@angular/http';
import {LoginServiceService} from './services/login-service.service';
import {CheckoutService} from './services/checkout.service';
import { WeightScaleComponent } from './weight-scale/weight-scale.component';
import {MatTabsModule} from '@angular/material';
import { AdminConfigComponent } from './admin-config/admin-config.component';
import {WeightTolerateService} from "./services/weight-tolerate.service";
import { ItemTrendingComponent } from './item-trending/item-trending.component';
import {AdminConfigService} from "./services/admin-config.service";
import {ItemBaseService} from "./services/item-base.service";
import { BrandTrendingComponent } from './brand-trending/brand-trending.component';
import {BrandBaseService} from "./services/brand-base.service";
import { CustomerSuggestionComponent } from './customer-suggestion/customer-suggestion.component';
import {CustomerBaseService} from "./services/customer-base.service";
import { OptimalOrderQtyComponent } from './optimal-order-qty/optimal-order-qty.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginCustomerViewComponent,
        CheckoutViewCustomerComponent,
        LoginAdminViewComponent,
        AdminViewComponent,
        SmthComponent,
        BillRecieptComponent,
        WeightScaleComponent,
        AdminConfigComponent,
        ItemTrendingComponent,
        BrandTrendingComponent,
        CustomerSuggestionComponent,
        OptimalOrderQtyComponent
    ],
    imports: [
        MatTabsModule,
        FormsModule,
        HttpModule,
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
    providers: [BillService,
        LoginServiceService,
        CheckoutService,
        WeightTolerateService,
        AdminConfigService,
        ItemBaseService,
        BrandBaseService,
        CustomerBaseService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
