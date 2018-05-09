import { TestBed, inject } from '@angular/core/testing';

import { WeaponSearchService } from './weapon-search.service';

describe('WeaponSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeaponSearchService]
    });
  });

  it('should be created', inject([WeaponSearchService], (service: WeaponSearchService) => {
    expect(service).toBeTruthy();
  }));
});
