import { Component, OnInit } from '@angular/core';

import { Character } from '../models/character';

import { CharacterService } from '../services/character.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})


export class CharactersComponent implements OnInit {

   
  title = 'One Piece';
  characters: Character[];
  selectedCharacter: Character;

  constructor(private characterService: CharacterService){

  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void{
    this.characterService.getCharacters().then(characters => this.characters = characters)
  }

  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }
}
