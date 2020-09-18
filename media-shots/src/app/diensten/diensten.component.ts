import { Component, OnInit } from '@angular/core';
import { Item } from './item/item.model';

@Component({
  selector: 'app-diensten',
  templateUrl: './diensten.component.html',
  styleUrls: ['./diensten.component.scss'],
})
export class DienstenComponent implements OnInit {
  title = 'Diensten';
  subtitle = 'Media Shots biedt verschillende diensten aan';
  items: Array<Item> = [
    new Item('Instructie video'),
    new Item('Product video'),
    new Item('After Movie'),
    new Item('Video Content'),
    new Item('Uitvaart'),
    new Item('Bedrijfsfilm'),
  ];
  constructor() {}

  ngOnInit(): void {}
}
