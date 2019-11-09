import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('body', {static: true}) el: ElementRef
  sectionsOnNav: string[] = ['APP-HEADER', 'APP-SERVICES', 'APP-ABOUT', 'APP-PORTFOLIO'];
  sectionHeight: number[] = [];
  sectionsArray;
  constructor() { }
  
  ngOnInit() {
    this.sectionsArray = Array.from(this.el.nativeElement.children);
    this.getHeight();
  }
  
  getHeight() {
    this.sectionsArray.forEach(element => {
      this.sectionsOnNav.forEach(section => {
        if (element.nodeName === section) {
          this.sectionHeight.push(element.offsetTop);
        }
      })
    });
  }

}
