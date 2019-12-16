import { TestBed } from '@angular/core/testing';

import { AllCinemaResolverService } from './all-cinema-resolver.service';

describe('AllCinemaResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllCinemaResolverService = TestBed.get(AllCinemaResolverService);
    expect(service).toBeTruthy();
  });
});
