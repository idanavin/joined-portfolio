import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Project } from '../project/project.module';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  {

  @Output() close = new EventEmitter<void>();
  @Input() project: Project;
  

 
  constructor() {
    console.log("this is modal constructor");
    console.log("project 1 is:" , this.project);
   }
  onClose() {
    this.close.emit();
  }
}
