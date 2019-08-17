import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-blurbs',
  templateUrl: './blurbs.component.html',
  animations: [
    trigger('blurbs', [
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
  styleUrls: ['./blurbs.component.scss']
})
export class BlurbsComponent implements OnInit {
  viewed = 'viewed'; //changed from not 'notViewed'

  @ViewChild('blurbs', { static: true }) blurbs: ElementRef;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.blurbs && this.blurbs.nativeElement.offsetTop <= scrollPosition) {
      this.viewed = 'viewed';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
