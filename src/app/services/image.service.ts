import { Injectable } from '@angular/core';
import { and } from '@angular/router/src/utils/collection';

@Injectable()
export class ImageService {

  visibleImages = [];

  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id:number){
    return IMAGES.slice(0).find(image => image.id == id );
  }
}

//for a now, later u need to take these photos from database
const IMAGES = [
  { "id": 1, "category": "characters", "caption": "Luffy", "url": "assets/img/luffy_01.jpeg" },
  { "id": 2, "category": "characters", "caption": "Zoro", "url": "assets/img/zoro_01.jpeg" },
  { "id": 3, "category": "characters", "caption": "Ussop", "url": "assets/img/ussop_01.jpeg" },
  { "id": 4, "category": "characters", "caption": "Sanji", "url": "assets/img/sanji_01.jpeg" },
  { "id": 5, "category": "characters", "caption": "Nami", "url": "assets/img/nami_01.jpeg" },
  { "id": 6, "category": "characters", "caption": "Chopper", "url": "assets/img/chopper_01.jpeg" },
  { "id": 7, "category": "characters", "caption": "Robin", "url": "assets/img/robin_01.jpeg" },
  { "id": 8, "category": "characters", "caption": "Franky", "url": "assets/img/franky_01.jpeg" },
  { "id": 9, "category": "characters", "caption": "Brook", "url": "assets/img/brook_01.jpeg" },
  { "id": 10, "category": "characters", "caption": "Jinbei", "url": "assets/img/jinbei_01.jpeg" },
  
  { "id": 11, "category": "ships", "caption": "Going Merry", "url": "assets/img/going_merry_01.jpeg" },
  { "id": 12, "category": "ships", "caption": "Sunny", "url": "assets/img/sunny_01.jpeg" },

  { "id": 13, "category": "weapons", "caption": "Devil fruit", "url": "assets/img/devilFruit_01.jpeg" },
  { "id": 14, "category": "weapons", "caption": "Melee", "url": "assets/img/melee_01.jpeg" },
  { "id": 15, "category": "weapons", "caption": "Sword", "url": "assets/img/sword_01.jpeg" },
  { "id": 16, "category": "weapons", "caption": "Shooting", "url": "assets/img/shooting_01.jpeg" },
  { "id": 17, "category": "weapons", "caption": "Mechanical", "url": "assets/img/mechanical_01.jpeg" }
]