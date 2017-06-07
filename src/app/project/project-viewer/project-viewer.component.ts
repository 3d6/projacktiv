import { Component, OnInit } from '@angular/core';
import {Project} from '../project';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project-viewer',
  templateUrl: './project-viewer.component.html',
  styleUrls: ['./project-viewer.component.less']
})
export class ProjectViewerComponent implements OnInit {

  public currentProject: Project;

  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
    this.currentProject = this.projectService.createProject();
  }

}
