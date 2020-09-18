import { Route } from '@angular/compiler/src/core';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
enum Command {
  Next = 'next',
  Prev = 'prev',
}
@Component({
  selector: 'app-samenwerking',
  templateUrl: './samenwerking.component.html',
  styleUrls: ['./samenwerking.component.scss'],
})
export class SamenwerkingComponent implements OnInit, AfterViewInit, OnDestroy {
  hasClicked = false;
  inter;
  @Input() title;
  @Input() carouselItems;
  @ViewChild('carouselControlNext') next: ElementRef;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.inter = setInterval(() => {
      this.next.nativeElement.click();
    }, 10000);
  }
  
  ngOnDestroy() {
    clearInterval(this.inter)
  }
  
  arrowFunction(
    targetElm,
    nextOrPrevSibling,
    carouselFirstOrLast,
    classNextOrPrev,
    classLeftOrRight
  ) {
    if (targetElm.classList.contains('active')) {
      // target element add carousel-item-left/carousel-item-right
      this.renderer.addClass(targetElm, classLeftOrRight);

      // next/prev element-sibling add carousel-item-next/carousel-item-prev and carousel-item-lef/tcarousel-item-right
      if (
        nextOrPrevSibling !== null &&
        nextOrPrevSibling.classList !== undefined
      ) {
        this.renderer.addClass(
          nextOrPrevSibling.querySelector('.carousel-item'),
          classNextOrPrev
        );

        setTimeout(() => {
          this.renderer.addClass(
            nextOrPrevSibling.querySelector('.carousel-item'),
            classLeftOrRight
          );
        }, 10);
      } else {
        this.renderer.addClass(carouselFirstOrLast, classNextOrPrev);

        setTimeout(() => {
          this.renderer.addClass(carouselFirstOrLast, classLeftOrRight);
        }, 10);
      }

      // target element remove active and classLeftOrRight
      setTimeout(() => {
        this.renderer.removeClass(targetElm, 'active');
        this.renderer.removeClass(targetElm, classLeftOrRight);
      }, 500);

      // next/prev element-sibling add active and remove other class
      setTimeout(() => {
        if (
          nextOrPrevSibling !== null &&
          nextOrPrevSibling.classList !== undefined
        ) {
          this.renderer.removeClass(
            nextOrPrevSibling.querySelector('.carousel-item'),
            classNextOrPrev
          );
          this.renderer.removeClass(
            nextOrPrevSibling.querySelector('.carousel-item'),
            classLeftOrRight
          );
          this.renderer.addClass(
            nextOrPrevSibling.querySelector('.carousel-item'),
            'active'
          );
        } else {
          this.renderer.removeClass(carouselFirstOrLast, classNextOrPrev);
          this.renderer.removeClass(carouselFirstOrLast, classLeftOrRight);
          this.renderer.addClass(carouselFirstOrLast, 'active');
        }
      }, 500);
    }
  }

  carouselControl(data: HTMLLinkElement) {
    if (!this.hasClicked) {
      const carouselInner = data.parentElement.querySelector('.carousel-inner');
      const carouselItem = carouselInner.querySelectorAll('.carousel-item');
      const carouselItemFirst = carouselItem[0];
      const carouselItemLast = carouselItem[carouselItem.length - 1];
      const command: Command = data.getAttribute('data-slide') as Command;

      if (command === Command.Next) {
        carouselItem.forEach((element) => {
          this.arrowFunction(
            element,
            element.parentNode.nextSibling,
            carouselItemFirst,
            'carousel-item-next',
            'carousel-item-left'
          );
        });
      }

      if (command === Command.Prev) {
        carouselItem.forEach((element) => {
          this.arrowFunction(
            element,
            element.parentNode.previousSibling,
            carouselItemLast,
            'carousel-item-prev',
            'carousel-item-right'
          );
        });
      }

      this.hasClicked = true;
      setTimeout(() => {
        this.hasClicked = false;
      }, 1000);
    }
  }
}
