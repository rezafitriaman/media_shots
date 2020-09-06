import { Component, OnInit, Renderer2,} from '@angular/core';
enum Command {
  Next = 'next',
  Prev = 'prev'
}
@Component({
  selector: 'app-samenwerking',
  templateUrl: './samenwerking.component.html',
  styleUrls: ['./samenwerking.component.scss']
})
export class SamenwerkingComponent implements OnInit {
  hasClicked = false
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  arrowFunction(targetElm, nextOrPrevSibling, carouselFirstOrLast, classNextOrPrev, classLeftOrRight) {
    if(targetElm.classList.contains('active')) {
      // target element add carousel-item-left/carousel-item-right
      this.renderer.addClass(targetElm, classLeftOrRight);

      // next/prev element-sibling add carousel-item-next/carousel-item-prev and carousel-item-lef/tcarousel-item-right
      if(nextOrPrevSibling !== null) {
        this.renderer.addClass(nextOrPrevSibling, classNextOrPrev);
        
        setTimeout(() => {
          this.renderer.addClass(nextOrPrevSibling, classLeftOrRight);
        },10)
      }else {
        this.renderer.addClass(carouselFirstOrLast, classNextOrPrev);
        
        setTimeout(() => {
          this.renderer.addClass(carouselFirstOrLast, classLeftOrRight);
        },10)
      }
      
      // target element remove active and classLeftOrRight
      setTimeout(() => {
        this.renderer.removeClass(targetElm, 'active');
        this.renderer.removeClass(targetElm, classLeftOrRight);
      },500)
      
      // next/prev element-sibling add active and remove other class
      setTimeout(() => {
        if(nextOrPrevSibling !== null) {
          this.renderer.removeClass(nextOrPrevSibling, classNextOrPrev);
          this.renderer.removeClass(nextOrPrevSibling, classLeftOrRight);
          this.renderer.addClass(nextOrPrevSibling, 'active');
        }else {
          this.renderer.removeClass(carouselFirstOrLast, classNextOrPrev);
          this.renderer.removeClass(carouselFirstOrLast, classLeftOrRight);
          this.renderer.addClass(carouselFirstOrLast, 'active');
        }
      },500)
    }
  }

  carouselControl(data) {
    if(!this.hasClicked) {
      const carouselInner = data.parentElement.querySelector('.carousel-inner');
      const carouselItem = carouselInner.querySelectorAll('.carousel-item');
      const carouselItemFirst = carouselItem[0];
      const carouselItemLast = carouselItem[carouselItem.length - 1];
      const command: Command = data.getAttribute('data-slide');
  
      if(command === Command.Next) {
        carouselItem.forEach(element => {
          this.arrowFunction(element, element.nextSibling, carouselItemFirst, 'carousel-item-next', 'carousel-item-left');
        });
      }else {
        carouselItem.forEach(element => {
          this.arrowFunction(element, element.previousSibling, carouselItemLast, 'carousel-item-prev', 'carousel-item-right');
        });
      }
      
      this.hasClicked = true;
      setTimeout(() => {
        this.hasClicked = false;
      }, 1000); 
    }
  } 

}
