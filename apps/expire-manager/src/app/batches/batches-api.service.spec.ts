import { TestBed } from '@angular/core/testing';

import { BatchesApiService } from './batches-api.service';

describe('BatchesApiService', () => {
  let service: BatchesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
