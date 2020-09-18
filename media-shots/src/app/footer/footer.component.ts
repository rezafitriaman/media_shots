import { Component, OnInit } from '@angular/core';
import { SocialModel } from './social/social.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  emailAndPhone = 'email:name@company.com | phone:123.123.1234';
  adress = '12345 Street Name City, ST 12345';
  subText = 'There are many variations of passages of Lorem Ipsum available';
  socialIcons: Array<SocialModel> = [
    new SocialModel(
      'https://www.facebook.com/',
      '../assets/img/social-facebook.png'
    ),
    new SocialModel(
      'https://www.youtube.com/',
      '../assets/img/social-youtube.png'
    ),
    new SocialModel(
      'https://mail.google.com/',
      '../assets/img/social-mail.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
