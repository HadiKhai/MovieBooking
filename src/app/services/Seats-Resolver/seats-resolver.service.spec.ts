import { TestBed } from "@angular/core/testing";

import { SeatsResolverService } from "./seats-resolver.service";

describe("SeatsResolverService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: SeatsResolverService = TestBed.get(SeatsResolverService);
    expect(service).toBeTruthy();
  });
});
