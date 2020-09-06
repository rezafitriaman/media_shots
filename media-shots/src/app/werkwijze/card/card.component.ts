import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../../shared/card.model'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: CardModel;
  constructor() { }

  ngOnInit(): void {
  }

}
