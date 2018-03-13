import { Component, OnInit } from '@angular/core';

import { Character } from './../models/character';

import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  characters: Character[] = [];
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters()
    .then(characters => this.characters = characters.slice(1, 5));
  }


}
