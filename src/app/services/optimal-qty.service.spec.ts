import { TestBed, inject } from '@angular/core/testing';

import { OptimalQtyService } from './optimal-qty.service';

describe('OptimalQtyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptimalQtyService]
    });
  });

  it('should be created', inject([OptimalQtyService], (service: OptimalQtyService) => {
    expect(service).toBeTruthy();
  }));
});
