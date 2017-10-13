import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutViewCustomerComponent } from './checkout-view-customer.component';

describe('CheckoutViewCustomerComponent', () => {
  let component: CheckoutViewCustomerComponent;
  let fixture: ComponentFixture<CheckoutViewCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutViewCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutViewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
