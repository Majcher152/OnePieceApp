import { ShipService } from './../services/ship.service';
import { Component, OnInit } from '@angular/core';

import { Ship } from '../models/ship';


@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships: Ship[];

  constructor(
    private shipService: ShipService
  ) { }

  ngOnInit(): void {
    this.getShips();
  }

  getShips(): void {
    this.shipService.getShips().then(ships => this.ships = ships);
  }
}
