import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTrendingComponent } from './item-trending.component';

describe('ItemTrendingComponent', () => {
  let component: ItemTrendingComponent;
  let fixture: ComponentFixture<ItemTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
