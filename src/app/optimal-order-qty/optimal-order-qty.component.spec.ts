import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimalOrderQtyComponent } from './optimal-order-qty.component';

describe('OptimalOrderQtyComponent', () => {
  let component: OptimalOrderQtyComponent;
  let fixture: ComponentFixture<OptimalOrderQtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimalOrderQtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimalOrderQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
