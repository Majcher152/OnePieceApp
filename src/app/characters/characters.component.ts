import { Component, OnInit } from '@angular/core';

import { Character } from '../models/character';

import { CharacterService } from '../services/character.service';
import { Router } from '@angular/router';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})


export class CharactersComponent implements OnInit {   
  title = 'One Piece';
  characters: Character[];
  selectedCharacter: Character;
  dialogRef: MatDialogRef<SelectedCharacterDialog>;

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private dialog: MatDialog
  ){

  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void{
    this.characterService.getCharacters().then(characters => this.characters = characters)
  }

  onSelect(character: Character): void {
    this.dialogRef = this.dialog.open(SelectedCharacterDialog);
    this.dialogRef.componentInstance.selectedCharacter = character;
 /*    this.selectedCharacter = character; */
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

 @Component({
  selector: 'selected-character-dialog',
  template:`
    <h2>{{ selectedCharacter.name | uppercase }}</h2>
    <button mat-raised-button color="primary" (click)="gotoDetail()">View Details</button>
    <button mat-raised-button (click)="dialogRef.close()">Close</button>
  `
})
export class SelectedCharacterDialog {
  selectedCharacter: any;

  constructor(
    public dialogRef: MatDialogRef<SelectedCharacterDialog>,
    private router: Router){
    }

    gotoDetail() {
      this.dialogRef.close();
      this.router.navigate(['/detail', this.selectedCharacter.id]);
    }
} 
