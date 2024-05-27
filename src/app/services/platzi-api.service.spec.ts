import { TestBed } from '@angular/core/testing';

import { PlatziApiService } from './platzi-api.service';

describe('PlatziApiService', () => {
  let service: PlatziApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatziApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
