import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from 'src/app/shared/card.model';

@Component({
  selector: 'app-card-portfolio',
  templateUrl: './card-portfolio.component.html',
  styleUrls: ['./card-portfolio.component.scss']
})
export class CardPortfolioComponent implements OnInit {
  @Input() card: CardModel;
  constructor() { }

  ngOnInit(): void {
  }

}
