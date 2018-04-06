import { Component, OnInit } from '@angular/core';

import { Character } from '../models/character';

import { CharacterService } from '../services/character.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})


export class CharactersComponent implements OnInit {

   
  title = 'One Piece';
  characters: Character[];
  selectedCharacter: Character;

  constructor(
    private characterService: CharacterService,
    private router: Router
  ){

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

  goToDetail(){
    this.router.navigate(['/detail', this.selectedCharacter.id]);
  }

  add(name: string){
    name = name.trim();
    if(!name) {return;}
    this.characterService.create(name)
      .then(character => {
        this.characters.push(character);
        this.selectedCharacter = null;
      })
  }

  delete(character: Character) {
    this.characterService.delete(character.id)
    .then(() => {
      this.characters = this.characters.filter(ch => ch !== character);
      if(this.selectedCharacter === character) {
        this.selectedCharacter = null;
      }
    });
  }
}
