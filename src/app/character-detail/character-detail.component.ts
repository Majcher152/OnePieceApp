import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SelectedShipDialog } from './../ships/ships.component';
import { Ship } from './../models/ship';
import { ShipService } from './../services/ship.service';

import { Component, OnInit, Input } from '@angular/core';

import { Character } from './../models/character';

import { CharacterService } from './../services/character.service';
import { ImageService } from './../services/image.service';

import { ActivatedRoute, Params } from '@angular/router';

import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  id: number;
  ships: Ship[] = [];
  category: String;
  amount: number;
  dialogRef: MatDialogRef<SelectedShipDialog>;

  @Input()
  character: Character;
  visibleImage: any;

    constructor(
    private characterService: CharacterService,
    private shipService: ShipService,
    private route: ActivatedRoute,
    private location: Location,
    private imageService: ImageService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
        this.route.params.switchMap((params: Params) => 
        this.characterService.getCharacter(+params['id']))
        .subscribe(character => this.character = character);

      // It works but it's very ugly
        this.route.params.subscribe(params => {
          this.id = +params['id'];
          this.visibleImage = this.imageService.getImage(this.id);
        });
        
      if(this.id < 9) {
        this.getShips(); }
      else {
        this.getShip(); }
  
  }

  getShips():void{
    this.shipService.getShips()
      .then(ships => this.ships = ships);
  }

  getShip(): void {
    this.shipService.getShips()
      .then(ships => this.ships = ships.slice(1,2));
  }

  onSelect(ship: Ship): void {
    this.dialogRef = this.dialog.open(SelectedShipDialog);
    this.dialogRef.componentInstance.selectedShip = ship;
  }
  goBack() {
    this.location.back();
  }

  save(){
    this.characterService.update(this.character)
    .then(() => this.goBack());
  }
}
