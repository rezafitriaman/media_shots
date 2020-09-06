import { Component, OnInit } from '@angular/core';
import { Photo } from './photo/photo.model';

@Component({
  selector: 'app-over-ons',
  templateUrl: './over-ons.component.html',
  styleUrls: ['./over-ons.component.scss']
})
export class OverOnsComponent implements OnInit {
  photos: Array<Photo> = [new Photo('Ruben', 'Blalba', '../assets/img/image1.jpg'), 
                        new Photo('Sanne', 'Blalba', '../assets/img/image2.jpg'),
                        new Photo('Nog iemand', 'Blalba', '../assets/img/image3.jpg')];
  constructor() { }

  ngOnInit(): void {
  }

}
