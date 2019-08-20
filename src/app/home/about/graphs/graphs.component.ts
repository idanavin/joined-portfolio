import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  @Input() gId = '';
  dataset = [];
  datasetValue = [];

  us: Object = {
    "idan": {
      "design": ["Photoshop", "Design in general"],
      "design-value": [25, 35],
      "code": ["HTML", "JavaScript", "Angular"],
      "code-value": [55, 45, 85],
      "human": ["Trolling", "LoLing", "Cooking"],
      "human-value": [30, 20, 15]
    },
    "ron": {
      "design": ["photoshop", "blabla"],
      "design-value": [25, 35],
      "code": ["html", "js", "angular"],
      "code-value": [55, 45, 85],
      "human": ["trolling", "LoLing", "cooking"],
      "human-value": [30, 20, 15]
    }
  };


  

  constructor() { }

  ngOnInit() {
    this.dataset = this.us[this.gId].code;
    // console.log(this.dataset)
  }
  
  onClick(label) {
    this.dataset = this.us[this.gId][label];
    this.datasetValue = this.us[this.gId][label + '-value'];
    // console.log(this.datasetValue)
  }

}
