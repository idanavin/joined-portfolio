import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('f', { static: true }) loginForm: NgForm;
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  // project: ElementRef;
  context: CanvasRenderingContext2D;

  colours = ['#f5d76e', '#f7ca18', '#f4d03f', '#ececec', '#ecf0f1', '#a2ded0'];
  stars = [];

  constructor(public project: ElementRef) { }


  ngOnInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    
    this.init();
    console.log(this.context);
    
  }


  init() {
    this.canvas.nativeElement.width = window.innerWidth, this.canvas.nativeElement.height = window.innerHeight;

    for (var i = 0, l = 100; i < l; i++) {
      var radius = Math.random() * 1.5;
      this.stars.push({
        'radius': radius,
        'x': Math.random() * this.canvas.nativeElement.width,
        'y': Math.random() * this.canvas.nativeElement.height,
        'colour': this.colours[parseInt((Math.random() * 4).toString())],
        'blur': Math.random() * 10,
        'pulse': true,
        'threshold': (radius * 1.25)
      });
    }
    requestAnimationFrame(() =>this.draw());
  };

  generatePulseVariance(star, canvas) {
    if (star.pulse) {
      star.radius += 0.075;
      star.pulse = (star.radius <= star.threshold);
    }
    else {
      if (star.radius >= 1)
        star.radius -= 0.075;
      star.pulse = (star.radius <= 1);
    }

    if (star.x < canvas.width)
      star.x += 0.35;
    else
      star.x = 0;

    return star;
  };

  draw() {
    this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

    for (var i = 0, l = this.stars.length; i < l; i++) {
      var star = this.stars[i];
      star = this.generatePulseVariance(star, this.canvas.nativeElement);
      
      this.context.beginPath();
      this.context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI, false);
      this.context.fillStyle = star.colour;
      this.context.shadowColor = star.colour;
      this.context.shadowBlur = star.blur;
      this.context.fill();
    }

    requestAnimationFrame(() =>this.draw());
  };

  gotoProjects() {
    let el = this.project.nativeElement.parentElement.querySelector('.portfolio');
    el.scrollIntoView();
  }

}
