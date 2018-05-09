import { Observable } from 'rxjs';
import { Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Weapon } from '../models/weapon';

@Injectable()
export class WeaponSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<Weapon[]> {
    return this.http.get(`app/weapons/?name=${term}`)
              .map((r: Response) => r.json().data as Weapon[]);
  }
}
