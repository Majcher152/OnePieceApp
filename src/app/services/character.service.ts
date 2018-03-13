import { Injectable } from '@angular/core';

import { Character } from './../models/character';
import { CHARACTERS } from './../models/mock-characters';

@Injectable()
export class CharacterService {

  constructor() { 

  }

  getCharacters(): Promise<Character[]> {
    return Promise.resolve(CHARACTERS);
  }

}
