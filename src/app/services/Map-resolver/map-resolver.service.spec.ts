import { TestBed } from '@angular/core/testing';

import { MapResolverService } from './map-resolver.service';

describe('MapResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapResolverService = TestBed.get(MapResolverService);
    expect(service).toBeTruthy();
  });
});
