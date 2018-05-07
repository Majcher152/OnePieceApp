import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() {

   }

   createDb() {
      let characters = [
        { id: 1, name: 'Luffy', category: 'characters' },
        { id: 2, name: 'Zoro', category: 'characters' },
        { id: 3, name: 'Usop', category: 'characters' },
        { id: 4, name: 'Sanji', category: 'characters' },
        { id: 5, name: 'Nami', category: 'characters' },
        { id: 6, name: 'Chopper', category: 'characters' },
        { id: 7, name: 'Robin', category: 'characters' },
        { id: 8, name: 'Franky', category: 'characters' },
        { id: 9, name: 'Brook', category: 'characters' },
        { id: 10, name: 'Jinbei', category: 'characters' },
    ];
    let ships = [
      { id: 11, name: 'Going Merry', category: 'ships' },
      { id: 12, name: 'Sunny', category: 'ships' }
    ];
    let weapons = [
      { id: 13, name: 'Devil fruit', category: 'weapons'},
      { id: 14, name: 'Melee', category: 'weapons'},
      { id: 15, name: 'Sword', category: 'weapons'},
      { id: 16, name: 'Shooting', category: 'weapons'},
      { id: 17, name: 'Mechanical', category: 'weapons'},
    ];
    return {characters, ships, weapons};
  } 


  
}
