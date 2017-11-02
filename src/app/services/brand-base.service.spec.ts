import { TestBed, inject } from '@angular/core/testing';

import { BrandBaseService } from './brand-base.service';

describe('BrandBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrandBaseService]
    });
  });

  it('should be created', inject([BrandBaseService], (service: BrandBaseService) => {
    expect(service).toBeTruthy();
  }));
});
