import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmthComponent } from './smth.component';

describe('SmthComponent', () => {
  let component: SmthComponent;
  let fixture: ComponentFixture<SmthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
