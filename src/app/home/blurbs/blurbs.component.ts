import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { viewAnimation } from '../../animations';

@Component({
  selector: 'app-blurbs',
  templateUrl: './blurbs.component.html',
  animations: [viewAnimation],
  styleUrls: ['./blurbs.component.scss']
})
export class BlurbsComponent implements OnInit {
  viewed = 'notViewed'; //changed from not 'notViewed'

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
