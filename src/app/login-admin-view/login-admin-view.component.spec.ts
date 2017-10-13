import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminViewComponent } from './login-admin-view.component';

describe('LoginAdminViewComponent', () => {
  let component: LoginAdminViewComponent;
  let fixture: ComponentFixture<LoginAdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAdminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
