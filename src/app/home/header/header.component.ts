import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  

  constructor(public project: ElementRef) { }


  ngOnInit(): void {
  }

  gotoProjects() {
    let el = this.project.nativeElement.parentElement.querySelector('.portfolio');
    el.scrollIntoView();
  }
}
