import { Component, OnInit, ViewChild, HostListener, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu', { static: true }) menuElement: ElementRef;
  sticky: boolean = false;
  active: any = '';
  menuPosition: any;
  @Input() sectionHeight: [];
  @HostListener('window:scroll')
  handleScroll() {
    const windowScroll = window.pageYOffset;
    //For Sticky
    if (windowScroll >= this.menuPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
    // For active class
    this.sectionHeight.forEach((element, index) => {
      if (element < windowScroll && this.sectionHeight[index + 1] >= windowScroll) {
        this.active = index;
      }
      // For last link (need to check if works fine)
      else if ((this.sectionHeight[index - 1] + 500) < windowScroll && element > windowScroll && (this.sectionHeight.length-1) === index) {
        this.active = index;
      }
      // else console.log(this.sectionHeight[index - 1], element, windowScroll, this.sectionHeight.length, index); 
    });

  }

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.menuPosition = this.menuElement.nativeElement.offsetTop
    console.log(this.sectionHeight);
  }

  goTo(e) {
    let el = this.menuElement.nativeElement.parentElement.parentElement.querySelector(`.${e}`);
    el.scrollIntoView({ behavior: "smooth" });
  }

}
