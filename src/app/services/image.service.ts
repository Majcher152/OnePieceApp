import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  visibleImages = [];

  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id:number){
    return IMAGES.slice(0).find(image => image.id == id);
  }
}

//for a now, later u need to take these photos from 
const IMAGES = [
  { "id": 1, "category": "characters", "caption": "Nami", "url": "assets/img/nami_01.jpeg" },
  { "id": 2, "category": "characters", "caption": "Luffy", "url": "assets/img/luffy_01.jpeg" },
  { "id": 3, "category": "characters", "caption": "Zoro", "url": "assets/img/zoro_01.jpeg" },
  { "id": 4, "category": "characters", "caption": "Sanji", "url": "assets/img/sanji_01.jpeg" },
  { "id": 5, "category": "characters", "caption": "Brook", "url": "assets/img/brook_01.jpeg" },
  { "id": 6, "category": "characters", "caption": "Robin", "url": "assets/img/robin_01.jpeg" },
  { "id": 7, "category": "characters", "caption": "Ussop", "url": "assets/img/ussop_01.jpeg" },
  { "id": 8, "category": "characters", "caption": "Chopper", "url": "assets/img/chopper_01.jpeg" },
  { "id": 9, "category": "characters", "caption": "Franky", "url": "assets/img/franky_01.jpeg" }
 
  
  
]