import { Component, OnInit, OnChanges } from '@angular/core';

import { Character } from './../models/character';

import { CharacterService } from '../services/character.service';
import { ImageService } from './../services/image.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  characters: Character[] = [];
  visibleImages: any[] = [];
  constructor(private characterService: CharacterService, private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
   }

  ngOnInit() {
    this.characterService.getCharacters()
    .then(characters => this.characters = characters.slice(0, 4));
  }


}
