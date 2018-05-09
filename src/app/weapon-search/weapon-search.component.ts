import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { WeaponSearchService } from './../services/weapon-search.service';
import { Weapon } from './../models/weapon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon-search',
  templateUrl: './weapon-search.component.html',
  styleUrls: ['./weapon-search.component.css']
})
export class WeaponSearchComponent implements OnInit {

  weapons: Observable<Weapon[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private weaponSearchService: WeaponSearchService,
    private router: Router ) { 

  }

  ngOnInit() {
    this.weapons = this.searchTerms  
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.weaponSearchService.search(term) 
    : Observable.of<Weapon[]>([]))
    .catch(error => {
      console.log(error);
      return Observable.of<Weapon[]>([]);
    });
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(weapon: Weapon){
    let link = ['/weapon/detail', weapon.id];
    this.router.navigate(link);
  }
}
