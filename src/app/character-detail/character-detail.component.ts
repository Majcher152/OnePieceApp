import { SelectedWeaponDialog } from './../weapons/weapons.component';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';

import { SelectedShipDialog } from './../ships/ships.component';

import { Character } from './../models/character';
import { Ship } from './../models/ship';
import { Weapon } from './../models/weapon';

import { WeaponService } from './../services/weapon.service';
import { ShipService } from './../services/ship.service';
import { CharacterService } from './../services/character.service';
import { ImageService } from './../services/image.service';



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
  weapons: Weapon[] = [];
  category: String;
  amount: number;
  dialogRef: MatDialogRef<any>;

  @Input()
  character: Character;
  visibleImage: any;

  constructor(
    private characterService: CharacterService,
    private shipService: ShipService,
    private weaponService: WeaponService,
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

    //Add DB and fix this shit
    //Ships for character
    if (this.id < 9) {
      this.getShips();
    }
    else {
      this.getShip();
    }

    //Add DB and fix this shit
    //Weapons for characters
    switch (this.id) {
      case 1: {
        //Luffy 13 14
        this.getWeapon(13);
        this.getWeapon(14);
        break;
      }
      case 2:{
        //Zorro 15
        this.getWeapon(15);
        break;
      }
      case 3: {
        //Usop 16
        this.getWeapon(16);
        break;
      }
      case 4: {
        //Sanji 14
        this.getWeapon(14);
        break;
      }
      case 5:{
        //Nami 17
        this.getWeapon(17);
        break;
      }
      case 6: {
        //Chopper 13 14
        this.getWeapon(13);
        this.getWeapon(14);
        break;
      }
      case 7:{
        //Robin 13
        this.getWeapon(13);
        break;
      }
      case 8:{
        // Franky 14 17 
        this.getWeapon(14);
        this.getWeapon(17);
        break;
      }
      case 9:{
        // Brook 13 15
        this.getWeapon(13);
        this.getWeapon(15);
        break;
      }
      case 10:{
        // Jinbei 14
        this.getWeapon(14);
        break;
      }
    }

  }

  getShips(): void {
    this.shipService.getShips()
      .then(ships => this.ships = ships);
  }

  getShip(): void {
    this.shipService.getShips()
      .then(ships => this.ships = ships.slice(1, 2));
    this.weapons
  }

  getWeapon(id: number): void {
    this.weaponService.getWeapon(id)
      .then(weapon => this.weapons.push(weapon));
  }

  /*   onSelect(ship: Ship): void {
      this.dialogRef = this.dialog.open(SelectedShipDialog);
      this.dialogRef.componentInstance.selectedShip = ship;
    } */

  onSelect(ship_weapon: any): void {
    if (ship_weapon.category === "ships") {
      this.dialogRef = this.dialog.open(SelectedShipDialog);
      this.dialogRef.componentInstance.selectedShip = ship_weapon;
    } else {
      this.dialogRef = this.dialog.open(SelectedWeaponDialog);
      this.dialogRef.componentInstance.selectedWeapon = ship_weapon;
    }
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.characterService.update(this.character)
      .then(() => this.goBack());
  }
}
