import { WeaponService } from './../services/weapon.service';
import { Weapon } from './../models/weapon';
import { Ship } from './../models/ship';
import { Component, OnInit, OnChanges } from '@angular/core';

import { Character } from './../models/character';

import { CharacterService } from '../services/character.service';
import { ImageService } from './../services/image.service';
import { ShipService } from '../services/ship.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  characters: Character[] = [];
  ships: Ship[] = [];
  weapons: Weapon[] = [];

  visibleImagesCharacters: any[] = [];
  visibleImagesWeapons: any[] = [];
  visibleImagesShips: any[] = [];

  constructor(
    private characterService: CharacterService,
    private imageService: ImageService,
    private shipService: ShipService,
    private weaponService: WeaponService
  ) {
    this.visibleImagesCharacters = this.imageService.getImages();
    this.visibleImagesShips = this.visibleImagesCharacters.slice(10, 12);
    this.visibleImagesWeapons = this.visibleImagesCharacters.slice(12, 16);
  }

  ngOnInit() {
    this.characterService.getCharacters()
      .then(characters => this.characters = characters.slice(0, 4));
    this.shipService.getShips()
      .then(ships => this.ships = ships);
    this.weaponService.getWeapons()
      .then(weapons => this.weapons = weapons.slice(0, 4));
  }


}
