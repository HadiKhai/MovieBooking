import { TestBed } from '@angular/core/testing';

import { CinemaRatingResolverService } from './cinema-rating-resolver.service';

describe('CinemaRatingResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CinemaRatingResolverService = TestBed.get(CinemaRatingResolverService);
    expect(service).toBeTruthy();
  });
});
