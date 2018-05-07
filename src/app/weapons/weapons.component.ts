import { Weapon } from './../models/weapon';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { WeaponService } from './../services/weapon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  weapons: Weapon[] = [];
  selectedWeapon: Weapon;
  dialogRef: MatDialogRef<SelectedWeaponDialog>;

  constructor(
    private weaponService: WeaponService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getWeapons();
  }

  getWeapons(): void {
    this.weaponService.getWeapons().then(weapons => this.weapons = weapons);
  }

  add(name: String): void {
    name=name.trim();
    if(!name){ return ;}
    this.weaponService.create(name)
    .then(weapon => {
      this.weapons.push(weapon);
      this.selectedWeapon = null;
    })
  }

  delete(weapon: Weapon){
    this.weaponService.delete(weapon.id)
        .then(() => {
          this.weapons = this.weapons.filter(wp => wp !== weapon);
          if(this.selectedWeapon === weapon){
            this.selectedWeapon = null;
          }
        })
  }

  onSelect(weapon: Weapon): void{
    this.dialogRef = this.dialog.open(SelectedWeaponDialog);
    this.dialogRef.componentInstance.selectedWeapon = weapon;
  }
}

@Component({
  selector: 'selected-weapon-dialog',
  template: `<h2>{{ selectedWeapon.name | uppercase}}</h2>
  <button mat-raised-button color="primary" (click)="gotoDetail()">View Details</button>
  <button mat-raised-button (click)="dialogRef.close()">Close</button>
  `
})

export class SelectedWeaponDialog{
  selectedWeapon: any;

  constructor(
    public dialogRef: MatDialogRef<SelectedWeaponDialog>,
    private router: Router
  ){}

  gotoDetail(): void{
    this.dialogRef.close();
    this.router.navigate(['weapon/detail', this.selectedWeapon.id])
  } 
}