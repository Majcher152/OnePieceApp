import { Weapon } from './../models/weapon';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeaponService {

  private weaponUrl = 'api/weapons';
  private headers = new Headers({'Content-type': 'application/json'});
  

  constructor(private http:Http) { }


  public getWeapons(): Promise<Weapon[]>{
    return this.http.get(this.weaponUrl).toPromise()
      .then(response => response.json().data as Weapon[]);
  }

  public create(name:String): Promise<Weapon>{
    return this.http.post(this.weaponUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res=>res.json().data)
            .catch(this.handleError);
  }

  public delete(id: number): Promise<void>{
    const url = `${this.weaponUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
                    .toPromise()
                    .then(() => null)
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.log(error);
    return Promise.reject(error.message);
  }
}
