import { Component, OnInit, HostListener, ElementRef, ViewChild, Output } from '@angular/core';
import { viewAnimation } from '../../animations';
import { Project } from './project/project.module';

// import projects from './projects.json';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [viewAnimation]
})
export class PortfolioComponent implements OnInit {
  project: string;
  assets: string = '../../../assets/';
  
  project1 = new Project(
    'Art Of Idan',
    'Angular HTML5 SASS',
    'Made for a comic books artist to display his skill set',
    this.assets + 'artofidanPreview.jpg',
    [this.assets + 'artofidan-1.jpg',this.assets + 'artofidan-2.jpg', this.assets + 'artofidan-3.jpg'],
    'http://artofidan.stoleron.com/');
  project2 = new Project(
    'Dharma-Photography',
    'HTML5 SASS Javascript',
    'Made for photography buissness, Responsive UI, Auth and admin control over requested elements.',
    this.assets + 'dharmaPreview.jpg',
    [this.assets + 'dharma-1.png',this.assets + 'dharma-2.png', this.assets + 'dharmaPreview.jpg'],
    'http://dharma-photography.stoleron.com/');  
  project3 = new Project(
    'Mock-up',
    'Angular Nodejs',
    'Converted a sample website image into a working single page application with a backend. We use Nodejs and database for a working login backend.',
    this.assets + 'mockup.jpg',
    [this.assets + 'mockup1.jpg'],
    '#');

  clicked = false;
  viewed = 'notViewed';
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

  clickBy(project){
    this.clicked = !this.clicked;
    this.project = project;
  }
}
