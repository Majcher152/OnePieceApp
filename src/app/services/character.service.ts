import { DashboardComponent } from './../dashboard/dashboard.component';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Character } from './../models/character';


@Injectable()
export class CharacterService {
  private charactersUrl = 'api/characters';
  private headers = new Headers({'Content-type': 'application/json'});

  constructor(private http: Http) { 

  }

  getCharacters(): Promise<Character[]> {
    return this.http.get(this.charactersUrl)
    .toPromise()
    .then(response => response.json().data as Character[])
    .catch(this.handleError);
  }

  getCharacter(id: number): Promise<Character> {
/*     return this.getCharacters()
    .then(characters => characters.find(character => character.id === id)); */
    const url = `${this.charactersUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Character)
    .catch(this.handleError);
  }

  update(character: Character): Promise<Character>{
    const url = `${this.charactersUrl}/${character.id}`;
    return this.http.put(url, JSON.stringify(character))
      .toPromise()
      .then(() => character)
      .catch(this.handleError);
  }

  create(name: string): Promise<Character> {
    return this.http.post(this.charactersUrl, JSON.stringify({name: name}), {headers: this.headers})
              .toPromise()
              .then(res => res.json().data)
              .catch(this.handleError); 

  }

  delete(id: number): Promise<void>{
    const url = `${this.charactersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

  }


  private handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message);
  }
}
