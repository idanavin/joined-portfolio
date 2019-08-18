import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu', { static: true }) menuElement: ElementRef;
  sticky: boolean = false;
  menuPosition: any;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.menuPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.menuPosition = this.menuElement.nativeElement.offsetTop
  }

  gotoHome() {
    let el = this.menuElement.nativeElement.parentElement.parentElement.querySelector('.blurbs');
    el.scrollIntoView();
  }

  gotoAbout() {
    let el = this.menuElement.nativeElement.parentElement.parentElement.querySelector('.about');
    el.scrollIntoView();
  }

  gotoProjects() {
    let el = this.menuElement.nativeElement.parentElement.parentElement.querySelector('.portfolio');
    el.scrollIntoView();
  }

  gotoContact() {
    let el = this.menuElement.nativeElement.parentElement.parentElement.querySelector('.contact');
    el.scrollIntoView();
  }


}
