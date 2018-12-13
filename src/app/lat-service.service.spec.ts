import { TestBed } from '@angular/core/testing';

import { LatServiceService } from './lat-service.service';

describe('LatServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LatServiceService = TestBed.get(LatServiceService);
    expect(service).toBeTruthy();
  });
});
