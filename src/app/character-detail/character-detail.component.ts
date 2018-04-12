
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
sub: any;

  @Input()
  character: Character;
  visibleImage: any;
  /* id: number;
   */
    constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private location: Location,
    private imageService: ImageService
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
        
  }

  goBack() {
    this.location.back();
  }

  save(){
    this.characterService.update(this.character)
    .then(() => this.goBack());
  }
}
