import { Ship } from './../models/ship';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class ShipService {

 
  private shipsUrl = 'api/ships';

  constructor(private http: Http) { }

  public getShips(): Promise<Ship[]>{
    return this.http.get(this.shipsUrl).toPromise().then(response => response.json().data as Ship[])
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error.message);
  }
}
