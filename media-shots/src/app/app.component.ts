import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'media-shots';
  navigateTo = 'werkwijze';
  onNavigate(navigateTo: string) {
    console.log(navigateTo);
    this.navigateTo = navigateTo;
  }
}
