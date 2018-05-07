import { MatDialogRef } from '@angular/material/dialog';
import { ShipService } from './../services/ship.service';
import { Component, OnInit } from '@angular/core';

import { Ship } from '../models/ship';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships: Ship[];
  selectedShip: Ship;
  dialogRef: MatDialogRef<SelectedShipDialog>; 

  constructor(
    private shipService: ShipService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getShips();
  }

  getShips(): void {
    this.shipService.getShips().then(ships => this.ships = ships);
  }

  add(name: string){
    name = name.trim();
    if(!name){ return; }
    this.shipService.create(name)
      .then(ship => {
        this.ships.push(ship);
        this.selectedShip = null;
      })
  }

  delete(ship: Ship){
    this.shipService.delete(ship.id)
        .then( () => {
          this.ships = this.ships.filter(sh => sh !== ship);
          if(this.selectedShip === ship){
            this.selectedShip = null;
          }
        })
  }
   onSelect(ship: Ship): void{
    this.dialogRef = this.dialog.open(SelectedShipDialog);
    this.dialogRef.componentInstance.selectedShip = ship;
  }
}

@Component({
  selector: 'selected-ship-dialog',
  template: `
      <h2>{{ selectedShip.name | uppercase }}</h2>
      <button mat-raised-button color="primary" (click)="gotoDetail()">View Details</button>
      <button mat-raised-button (click)="dialogRef.close()">Close</button>
  `
})

export class SelectedShipDialog{
  selectedShip: any;

  constructor(
    public dialogRef: MatDialogRef<SelectedShipDialog>,
    private router: Router ) {
    }

  gotoDetail(){
    this.dialogRef.close();
    this.router.navigate(['ship/detail',this.selectedShip.id]);
  }
    
} 