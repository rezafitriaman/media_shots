import { Component, Output } from '@angular/core';
import { Carousel } from './samenwerking/carousel-item/carousel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Output() videoSubtitle = 'Portolio';
  @Output() footerText =
    'Mediashots werkt met jou samen vanaf idee tot het eind product';
  @Output() urlVideo =
    'https://www.youtube.com/embed/HCDVN7DCzYE?playlist=HCDVN7DCzYE&controls=0&showinfo=0&loop=1&autoplay=1&mute=1';
  @Output() title = 'Samenwerking';
  @Output() carouselItems: Array<Carousel> = [
    new Carousel('../assets/img/logos-smaller.png'),
    new Carousel('../assets/img/logos-smaller1.png'),
    new Carousel('../assets/img/logos-smaller.png'),
  ];
}
