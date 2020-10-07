import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ItemNav } from 'src/app/shared/itemNav.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  itemsNav: Array<ItemNav> = [];
  @Input() set itemsNavElm(navElms: ItemNav) {
    this.itemsNav.push(navElms);
  }
  @Output() loadedNavSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
  }

  onNavigate(navSelected: string) {
    this.loadedNavSelected.emit(navSelected);
  }
}
