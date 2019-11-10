import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('body', {static: true}) el: ElementRef;

  sectionsOnNav: string[] = ['APP-HEADER', 'APP-SERVICES', 'APP-ABOUT', 'APP-PORTFOLIO'];
  sectionHeight: number[];
  sectionsArray: HTMLElement[];
  
  constructor() { }
  
  ngOnInit() {
    this.sectionsArray = Array.from(this.el.nativeElement.children);
    // console.log('this.sectionsArray:', this.sectionsArray)
    this.getHeight();
    // console.log('this.sectionHeight:', this.sectionHeight)
  }
  
  @HostListener('window:resize')
  getHeight() {
    this.sectionHeight = [];
    this.sectionsArray.forEach((element: HTMLElement) => {
      if (this.sectionsOnNav.includes(element.nodeName)) {
        this.sectionHeight.push(element.offsetTop - 100);
      }
    });
  }
}
