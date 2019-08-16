import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [
    trigger('about', [
      state('notViewed', style({
        // height: 0,
        opacity: 0
      })),
      state('viewed', style({
        opacity: 1
      })),
      transition('notViewed => viewed', animate(2000))
    ])
  ],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  viewed = 'notViewed';

  @ViewChild('about', { static: true }) about: ElementRef;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.about && this.about.nativeElement.offsetTop <= scrollPosition) {
      this.viewed = 'viewed';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
