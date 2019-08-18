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

  goTo(e) {
    let el = this.menuElement.nativeElement.parentElement.parentElement.querySelector(`.${e}`);
    el.scrollIntoView({behavior: "smooth"});
  }

}
