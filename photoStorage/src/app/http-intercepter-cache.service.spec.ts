import { TestBed, inject } from '@angular/core/testing';

import { HttpIntercepterCacheService } from './http-intercepter-cache.service';

describe('HttpIntercepterCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpIntercepterCacheService]
    });
  });

  it('should be created', inject([HttpIntercepterCacheService], (service: HttpIntercepterCacheService) => {
    expect(service).toBeTruthy();
  }));
});
