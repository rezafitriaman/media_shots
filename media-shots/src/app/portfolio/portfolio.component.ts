import { Component, OnInit } from '@angular/core';
import { CardModel } from '../shared/card.model';
import { ItemNav } from './nav/item/itemNav.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  cards: Array<CardModel> = [];
  // todo make this better - create object for itemNav and cards 
  itemsNav: Array<ItemNav> = [new ItemNav('Instructievideo'),
                              new ItemNav('Bedrijfsvideo'),
                              new ItemNav('Socialmediavideo'),
                              new ItemNav('Aftermovie')];

  instructieVideo: Array<CardModel> = [new CardModel('Pedro', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                                      new CardModel('instructie 2', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                                      new CardModel('instructie 3', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                                      new CardModel('instructie 4', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard2.png')]
  bedrijfsvideo: Array<CardModel> = [new CardModel('bedrijfs 1', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                                    new CardModel('bedrijfs 2', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                                    new CardModel('bedrijfs 3', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                                    new CardModel('bedrijfs 4', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard2.png')]                        
  socialmediavideo: Array<CardModel> = [new CardModel('socialmedia 1', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                                        new CardModel('socialmedia 2', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                                        new CardModel('socialmedia 3', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                                        new CardModel('socialmedia 4', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard2.png')] 
  aftermovie: Array<CardModel> = [new CardModel('aftermovie 1', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                                        new CardModel('aftermovie 2', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                                        new CardModel('aftermovie 3', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard.png'),
                                        new CardModel('aftermovie 4', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '../../assets/img/dashboard2.png')] 
  
  constructor() { }

  ngOnInit(): void {
    this.cards = this.instructieVideo;
  }

  onNavigate(navigation: string) {
    switch(navigation) {
      case 'Instructievideo':
        this.cards = [];
        this.cards.push(...this.instructieVideo)
        break;
      case 'Bedrijfsvideo':
        this.cards = [];
        this.cards.push(...this.bedrijfsvideo)
        break;
        case 'Socialmediavideo':
          this.cards = [];
          this.cards.push(...this.socialmediavideo)
        break;
        case 'Aftermovie':
          this.cards = [];
          this.cards.push(...this.aftermovie)
        break;
        case 'Instructievideo':
          this.cards = [];
          this.cards.push(...this.instructieVideo)
        break;
      default:
        this.cards.push(...this.instructieVideo)
    }
    
  }

}
