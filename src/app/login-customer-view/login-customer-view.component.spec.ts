import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCustomerViewComponent } from './login-customer-view.component';

describe('LoginCustomerViewComponent', () => {
  let component: LoginCustomerViewComponent;
  let fixture: ComponentFixture<LoginCustomerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCustomerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCustomerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
