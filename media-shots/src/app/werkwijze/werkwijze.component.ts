import { Component, OnInit } from '@angular/core';
import {CardModel} from '../shared/card.model'; 

@Component({
  selector: 'app-werkwijze',
  templateUrl: './werkwijze.component.html',
  styleUrls: ['./werkwijze.component.scss']
})
export class WerkwijzeComponent implements OnInit {
  cards: Array<CardModel> = [new CardModel('Title 1', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                        new CardModel('Title 2', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                        new CardModel('Title 3', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                        new CardModel('Title 4', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard2.png')];
  constructor() { }

  ngOnInit(): void {
  }

}
