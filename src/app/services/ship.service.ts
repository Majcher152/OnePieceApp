import { Ship } from './../models/ship';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShipService {
  private shipsUrl = 'api/ships';
   private headers = new Headers({'Content-type': 'application/json'}); 
  constructor(private http: Http) { }

  public getShips(): Promise<Ship[]>{
    return this.http.get(this.shipsUrl).toPromise().then(response => response.json().data as Ship[])
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error.message);
  }

  create(name: string): Promise<Ship> {
    return this.http.post(this.shipsUrl, JSON.stringify({ name: name }), { headers: this.headers })
                .toPromise()
                .then(res => res.json().data)
                .catch(this.handleError);
  } 

  delete(id: number): Promise<void>{
    const url = `${this.shipsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
                    .toPromise()
                    .then( () => null)
                    .catch(this.handleError);
  }
}
