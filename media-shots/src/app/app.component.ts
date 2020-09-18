import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: 'mediaShots'
  navigateTo = 'home';
  backgroundImage = '../assets/img/Video-Webinar.jpg';

  constructor() {}
  onNavigate(navigateTo: string) {
    this.navigateTo = navigateTo;
  }
}
