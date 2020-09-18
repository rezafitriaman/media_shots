import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  @Input() item: Item;
  constructor() {}

  ngOnInit(): void {}
}
