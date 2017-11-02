import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandTrendingComponent } from './brand-trending.component';

describe('BrandTrendingComponent', () => {
  let component: BrandTrendingComponent;
  let fixture: ComponentFixture<BrandTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
