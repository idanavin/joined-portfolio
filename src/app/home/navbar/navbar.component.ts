import { Component, OnInit, ViewChild, HostListener, ElementRef, Input, Optional } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu', { static: true }) menuElement: ElementRef;

  @Input() sectionHeight: [];

  sticky: boolean = false;
  active: any = '';
  menuPosition: any;

  constructor(@Optional() private homeComponent: HomeComponent) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
  }

  goTo(e) {

    let el = this.homeComponent.el.nativeElement.querySelector(`.${e}`);
    el.scrollIntoView({ behavior: "smooth" });
  }

  @HostListener('window:scroll')
  handleScroll() {
    const windowScroll = window.pageYOffset;
    //For Sticky
    this.sticky = windowScroll >= this.menuPosition;

    // For active class
    this.sectionHeight.forEach((elementOffset, index) => {


      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.active = this.sectionHeight.length - 1;
        return;
      }

      if (index === this.sectionHeight.length - 1) {
        if (elementOffset <= windowScroll) {
          this.active = index;
        }
      } else {
        if (elementOffset <= windowScroll && this.sectionHeight[index + 1] > windowScroll) {
          this.active = index;
        }
      }
    });
  }

}
