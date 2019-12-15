import { TestBed } from '@angular/core/testing';

import { MovieAvgResolverService } from './movie-avg-resolver.service';

describe('MovieAvgResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieAvgResolverService = TestBed.get(MovieAvgResolverService);
    expect(service).toBeTruthy();
  });
});
