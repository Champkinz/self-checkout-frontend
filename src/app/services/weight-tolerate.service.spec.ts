import { TestBed, inject } from '@angular/core/testing';

import { WeightTolerateService } from './weight-tolerate.service';

describe('WeightTolerateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeightTolerateService]
    });
  });

  it('should be created', inject([WeightTolerateService], (service: WeightTolerateService) => {
    expect(service).toBeTruthy();
  }));
});
