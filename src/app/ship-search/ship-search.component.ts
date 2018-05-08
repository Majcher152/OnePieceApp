import { ShipSearchService } from './../services/ship-search.service';
import { Router } from '@angular/router';
import { Ship } from './../models/ship';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship-search',
  templateUrl: './ship-search.component.html',
  styleUrls: ['./ship-search.component.css']
})
export class ShipSearchComponent implements OnInit {

  public ships: Observable<Ship[]>;
  private searchTerms = new Subject<String>();

  constructor(
    private shipSearchSerive: ShipSearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ships = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.shipSearchSerive.search(term)
        : Observable.of<Ship[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Ship[]>([]);
      });
  }

  public search(term: String): void {
    this.searchTerms.next(term);
  }

  public goToDetail(ship: Ship): void {
    let link = ['/ship/detail', ship.id];
    this.router.navigate(link);
  }
}
