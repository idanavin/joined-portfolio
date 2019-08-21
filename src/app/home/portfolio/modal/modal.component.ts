import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Project } from '../project/project.module';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  {
  emptyProject = new Project('','','','',[],'');
  
  @Output() close = new EventEmitter<void>();
  // @Input() project: string = 'empty';
  @Input() project: Project = this.emptyProject;

  selected: Project;
  constructor() {}

  ngOnInit() {
    // this.selected = this.projects[this.project]
    console.log("project: ", this.project);
    
  }
  onClose() {
    this.close.emit();
  }
}
