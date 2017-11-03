import { TestBed, inject } from '@angular/core/testing';

import { CustomerBaseService } from './customer-base.service';

describe('CustomerBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerBaseService]
    });
  });

  it('should be created', inject([CustomerBaseService], (service: CustomerBaseService) => {
    expect(service).toBeTruthy();
  }));
});
