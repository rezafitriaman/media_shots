import { Component, OnInit } from '@angular/core';
import { Photo } from './photo/photo.model';

@Component({
  selector: 'app-over-ons',
  templateUrl: './over-ons.component.html',
  styleUrls: ['./over-ons.component.scss']
})
export class OverOnsComponent implements OnInit {
  title = 'Over ons';
  subTitle = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ';
  photos: Array<Photo> = [new Photo('Ruben', 'Blalba', '../assets/img/image1.jpg'),
                        new Photo('Sanne', 'Blalba', '../assets/img/image2.jpg'),
                        new Photo('Nog iemand', 'Blalba', '../assets/img/image3.jpg')];
  constructor() { }

  ngOnInit(): void {
  }

}
