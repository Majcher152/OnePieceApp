import { Component } from '@angular/core';
import { Character } from './models/character';



const CHARACTERS:Character[] = [
  { id: 1, name: 'Nami' },
  { id: 2, name: 'Luffy'},
  { id: 3, name: 'Zorro'},
  { id: 4, name: 'Sanji'},
  { id: 5, name: 'Brook'},
  { id: 6, name: 'Robin'},
  { id: 7, name: 'Usop'},
  { id: 8, name: 'Chopper'},
  { id: 9, name: 'Franky'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'One Piece';
  characters: Character[] = CHARACTERS;
  selectedCharacter: Character;

  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }
}
