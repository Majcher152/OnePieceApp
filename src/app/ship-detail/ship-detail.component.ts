import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SelectedCharacterDialog } from './../characters/characters.component';
import { Character } from './../models/character';
import { CharacterService } from './../services/character.service';
import { ImageService } from './../services/image.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Ship } from './../models/ship';
import { Component, OnInit, Input } from '@angular/core';
import { ShipService } from '../services/ship.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.css']
})
export class ShipDetailComponent implements OnInit {

  id: number;
  characters: Character[] =[];
  amount: number;
  dialogRef: MatDialogRef<SelectedCharacterDialog>;

  @Input()
  ship: Ship;
  visibleImage: any;
  
  constructor(
    private shipService: ShipService,
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private location: Location,
    private imageService: ImageService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => 
        this.shipService.getShip(+params['id']))
        .subscribe(ship => this.ship = ship);

    this.route.params.subscribe(params =>{
      this.id = +params['id'];
      this.visibleImage = this.imageService.getImage(this.id);
    });
    if(this.id === 11) {
      this.amount = 8; }
      else {
      this.amount = 10; }
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
        .then(characters => this.characters = characters.slice(0, this.amount));
  }

  onSelect(character:Character): void{
    this.dialogRef = this.dialog.open(SelectedCharacterDialog);
    this.dialogRef.componentInstance.selectedCharacter = character;
  }

  goBack(){
    this.location.back();
  }

  save(){
    this.shipService.update(this.ship)
    .then(() => this.goBack())
  }
}
