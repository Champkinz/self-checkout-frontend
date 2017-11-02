import { TestBed, inject } from '@angular/core/testing';

import { ItemBaseService } from './item-base.service';

describe('ItemBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemBaseService]
    });
  });

  it('should be created', inject([ItemBaseService], (service: ItemBaseService) => {
    expect(service).toBeTruthy();
  }));
});
