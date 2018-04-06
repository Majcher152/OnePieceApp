import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Character } from './../models/character';

@Injectable()
export class CharacterSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<Character[]> {
    return this.http.get(`app/characters/?name=${term}`)
              .map((r: Response) => r.json().data as Character[]);
  }
}
