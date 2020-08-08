import { Component, OnInit } from '@angular/core';
import {Item} from './items/item.model';

@Component({
  selector: 'app-diensten',
  templateUrl: './diensten.component.html',
  styleUrls: ['./diensten.component.scss']
})
export class DienstenComponent implements OnInit {
  items: Array<Item> = [new Item('Instructie video'), new Item('Product video'), new Item('After Movie'),
    new Item('Video Content'), new Item('Uitvaart'), new Item('Bedrijfsfilm')];
  constructor() { }

  ngOnInit(): void {
  }

}
