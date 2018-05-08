import { SelectedCharacterDialog } from './../characters/characters.component';
import { Weapon } from './../models/weapon';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { ImageService } from './../services/image.service';
import { CharacterService } from './../services/character.service';
import { WeaponService } from './../services/weapon.service';
import { Character } from './../models/character';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css']
})
export class WeaponDetailComponent implements OnInit {

  private id: number;
  public characters: Character[] = [];
  private dialogRef: MatDialogRef<SelectedCharacterDialog>;

  @Input()
  weapon: Weapon;
  visibleImage: any;

  constructor(
    private weaponService: WeaponService,
    private characterService: CharacterService,
    private imageService: ImageService,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) =>
        this.weaponService.getWeapon(+params['id']))
        .subscribe(weapon => this.weapon = weapon);
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
      this.visibleImage = this.imageService.getImage(this.id);
    });

    switch(this.id){
      //Devil Fruit
      case 13: { 
        this.getCharacter(1); //Luffy
        this.getCharacter(6); //Chopper
        this.getCharacter(7); //Robin
        this.getCharacter(9); //Brook
        break;
      }
      //Melee
      case 14: {
        this.getCharacter(1); //Luffy
        this.getCharacter(4); //Sansji
        this.getCharacter(6); //Chopper
        this.getCharacter(8); //Franky
        this.getCharacter(10); //Jinbei
        break;
      } 
      //Sword
      case 15: {
        this.getCharacter(2); //Zorro
        this.getCharacter(9); //Brook
        break;
      }
      //Shooting
      case 16: {
        this.getCharacter(3); //Usop
        break;
      }
      //Mechanical
      case 17: {
        this.getCharacter(5); //Nami
        this.getCharacter(8); //Franky
        break;
      }
    }
  }

  getCharacter(id:number): void{
    this.characterService.getCharacter(id)
      .then(character => this.characters.push(character));
  }

  onSelect(character:Character): void{
    this.dialogRef = this.dialog.open(SelectedCharacterDialog);
    this.dialogRef.componentInstance.selectedCharacter = character;
    
  }

  goBack():void{
    this.location.back();
  }

  save():void{
    this.weaponService.update(this.weapon)
      .then(() => this.goBack());
  }

}
