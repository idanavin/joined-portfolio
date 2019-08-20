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
      "designValue": [25, 35],
      "code": ["HTML", "JavaScript", "Angular"],
      "codeValue": [55, 45, 85],
      "human": ["Trolling", "LoLing", "Cooking"],
      "humanValue": [30, 20, 15]
    },
    "ron": {
      "design": ["Photoshop", "Css"],
      "designValue": [88, 55],
      "code": ["html", "js", "angular"],
      "codeValue": [55, 45, 85],
      "human": ["trolling", "LoLing", "cooking"],
      "humanValue": [30, 20, 15]
    }
  };


  

  constructor() { }

  ngOnInit() {
    this.dataset = this.us[this.gId].code;
    this.datasetValue = this.us[this.gId].codeValue;
    // console.log(this.us[this.gId].code)
  }
  
  onClick(label) {
    this.dataset = this.us[this.gId][label];
    this.datasetValue = this.us[this.gId][label + 'Value'];
    // console.log(this.datasetValue)
  }

}
