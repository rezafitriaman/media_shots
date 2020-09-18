import { Component, Input, OnInit } from '@angular/core';
import { SocialModel } from './social.model';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {
  @Input() social: SocialModel;
  constructor() {}

  ngOnInit(): void {}
}
