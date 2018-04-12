import { Component } from '@angular/core';
import { ImageService } from './../services/image.service';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  constructor(private imageService: ImageService) { 
    
  }


}
