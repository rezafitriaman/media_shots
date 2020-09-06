import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ItemNav } from './item/itemNav.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  itemsNav: Array<ItemNav> = [];
  @Input() set itemsNavElm(navElms: ItemNav) {
    this.itemsNav.push(navElms)   
  }
  @Output() loadedNavSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.itemsNav)
  }
  
  onNavigate(navSelected: string) {
    this.loadedNavSelected.emit(navSelected);
  }
}
