import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from './carousel.model';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent implements OnInit {
  @Input() carouselItem: Carousel;
  @Input() index: number;
  constructor() {}

  ngOnInit(): void {}
}
