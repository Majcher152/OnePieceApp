import { TestBed, inject } from '@angular/core/testing';

import { ShipSearchService } from './ship-search.service';

describe('ShipSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipSearchService]
    });
  });

  it('should be created', inject([ShipSearchService], (service: ShipSearchService) => {
    expect(service).toBeTruthy();
  }));
});
