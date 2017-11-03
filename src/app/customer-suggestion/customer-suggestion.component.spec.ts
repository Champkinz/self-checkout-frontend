import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSuggestionComponent } from './customer-suggestion.component';

describe('CustomerSuggestionComponent', () => {
  let component: CustomerSuggestionComponent;
  let fixture: ComponentFixture<CustomerSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
