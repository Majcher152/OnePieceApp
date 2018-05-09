import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Ship } from '../models/ship';

@Injectable()
export class ShipSearchService {

  constructor(private http:Http) { }

  search(term: String):Observable<Ship[]>{
    console.log(this.http.get(`app/ships/?name=${term}`)
    .map((r: Response) => r.json().data as Ship[]));
    return this.http.get(`app/ships/?name=${term}`)
    .map((r: Response) => r.json().data as Ship[]);
  }
}
