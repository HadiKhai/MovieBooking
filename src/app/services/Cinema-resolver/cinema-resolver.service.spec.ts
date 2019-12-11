import { TestBed } from '@angular/core/testing';

import { CinemaResolverService } from './cinema-resolver.service';

describe('CinemaResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CinemaResolverService = TestBed.get(CinemaResolverService);
    expect(service).toBeTruthy();
  });
});
