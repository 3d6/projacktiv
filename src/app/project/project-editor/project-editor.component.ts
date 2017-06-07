import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {Project} from '../project';

@Component({
  selector: 'app-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.less']
})
export class ProjectEditorComponent implements OnInit {

  public currentProject: Project;

  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
    this.currentProject = this.projectService.createProject();
  }

}
