import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { viewAnimation } from '../../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [viewAnimation],
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
