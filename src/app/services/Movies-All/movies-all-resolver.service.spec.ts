import { TestBed } from '@angular/core/testing';

import { MoviesAllResolverService } from './movies-all-resolver.service';

describe('MoviesAllResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesAllResolverService = TestBed.get(MoviesAllResolverService);
    expect(service).toBeTruthy();
  });
});
