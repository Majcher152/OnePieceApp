import { TestBed, inject } from '@angular/core/testing';

import { CharacterSearchService } from './character-search.service';

describe('CharacterSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterSearchService]
    });
  });

  it('should be created', inject([CharacterSearchService], (service: CharacterSearchService) => {
    expect(service).toBeTruthy();
  }));
});
