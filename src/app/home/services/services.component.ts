import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { viewAnimation } from '../../animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [viewAnimation]
})
export class ServicesComponent implements OnInit {

  viewed = 'notViewed';

  @ViewChild('services', { static: true }) about: ElementRef;

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
