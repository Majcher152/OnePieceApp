import { Component, OnInit, Input } from '@angular/core';

import { Character } from './../models/character';

import { CharacterService } from './../services/character.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input()
  character: Character;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) =>
     this.characterService.getCharacter(+params['id']))
      .subscribe(character => this.character = character);
  }

  goBack() {
    this.location.back();
  }

  save(){
    this.characterService.update(this.character)
    .then(() => this.goBack());
  }
}
