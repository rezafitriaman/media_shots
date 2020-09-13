import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent implements OnInit {
  videoSubtitle = 'Portolio';
  footerText = 'Mediashots werkt met jou samen vanaf idee tot het eind product';
  url: string =
    'https://www.youtube.com/embed/HCDVN7DCzYE?playlist=HCDVN7DCzYE&controls=0&showinfo=0&loop=1&autoplay=1&mute=1';
  urlSafe: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
