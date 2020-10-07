import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { Router } from '@angular/router';
import { ItemNav } from 'src/app/shared/itemNav.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, AfterViewInit {
  @Input() itemNav: ItemNav;
  @Output() navSelected = new EventEmitter<string>();
  constructor(
    public elmRef: ElementRef,
    public renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const elemsA = this.elmRef.nativeElement.parentElement.querySelectorAll(
      'a'
    );
    this.renderer.addClass(elemsA[0], 'active');
  }

  onSelectNav(itemNav: ItemNav) {
    const elemsA = this.elmRef.nativeElement.parentElement.querySelectorAll(
      'a'
    );
    const targetA = this.elmRef.nativeElement.querySelector('a');

    elemsA.forEach((element) => {
      this.renderer.removeClass(element, 'active');
    });

    this.renderer.addClass(targetA, 'active');
    this.navSelected.emit(itemNav.navTitle);
    this.router.navigate(['/portfolio', itemNav.navTitle.toLowerCase()]);
  }
}
