import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { viewAnimation } from '../../animations';
import { Project } from './project/project.module';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [viewAnimation]
})
export class PortfolioComponent implements OnInit {

  
  clicked = false;
  viewed = 'notViewed';
  project1 = new Project('Art Of Idan', 'Angular html5 scss', 'This is a comic books artist','../../../assets/artofidanPreview.jpg', ['pita','humus'], 'www.artofidan.com');
  @ViewChild('portfolio', { static: true }) el: ElementRef;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.el && this.el.nativeElement.offsetTop <= scrollPosition) {
      this.viewed = 'viewed';
    }
  }
  constructor() { }

  ngOnInit() {
  }



  clickBy(){
    this.clicked = !this.clicked;
  }

  

}
