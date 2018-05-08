import { Router } from '@angular/router';
import { CharacterSearchService } from './../services/character-search.service';
import { Character } from './../models/character';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css']
})
export class CharacterSearchComponent implements OnInit {

  characters: Observable<Character[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private characterSearchService: CharacterSearchService,
    private router: Router ) { 

  }

  ngOnInit() {
    this.characters = this.searchTerms  
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.characterSearchService.search(term) 
    : Observable.of<Character[]>([]))
    .catch(error => {
      console.log(error);
      return Observable.of<Character[]>([]);
    });
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(character: Character){
    let link = ['/character/detail',character.id];
    this.router.navigate(link);
  }
}
