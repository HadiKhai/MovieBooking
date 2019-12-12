import { TestBed } from '@angular/core/testing';

import { RoomResolverService } from './room-resolver.service';

describe('RoomResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomResolverService = TestBed.get(RoomResolverService);
    expect(service).toBeTruthy();
  });
});
