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
      "design": ["Animations", "Images", "Typography"],
      "designValue": [85, 70, 55],
      "code": ["HTML", "JavaScript", "CSS", "Angular"],
      "codeValue": [90, 80, 85, 60],
      "human": ["Sport", "Gaming", "Parenting"],
      "humanValue": [0, 67, 82]
    },
    "ron": {
      "design": ["Animations", "Images", "Typography"],
      "designValue": [55, 70, 70],
      "code": ["HTML", "JavaScript", "CSS", "Angular"],
      "codeValue": [91, 83, 88, 79],
      "human": ["Sport", "Gaming", "Parenting"],
      "humanValue": [82, 67, 0]
    }
  };


  

  constructor() { }

  ngOnInit() {
    this.onClick('code');
    // console.log(this.us[this.gId].code)
  }
  
  onClick(label) {
    this.dataset = this.us[this.gId][label];
    this.datasetValue = this.us[this.gId][label + 'Value'];
    // console.log(this.datasetValue)
  }

}
