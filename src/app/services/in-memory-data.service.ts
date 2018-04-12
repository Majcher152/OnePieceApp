import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() {

   }

  createDb() {
      let characters = [
      { id: 1, name: 'Nami' },
      { id: 2, name: 'Luffy'},
      { id: 3, name: 'Zoro'},
      { id: 4, name: 'Sanji'},
      { id: 5, name: 'Brook'},
      { id: 6, name: 'Robin'},
      { id: 7, name: 'Usop'},
      { id: 8, name: 'Chopper'},
      { id: 9, name: 'Franky'}
    ];
    return {characters};
  }

  

  
}
