import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-viewer',
  templateUrl: './project-viewer.component.html',
  styleUrls: ['./project-viewer.component.less']
})
export class ProjectViewerComponent implements OnInit {

  public currentProject: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location) {
    this.currentProject = new Project();
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.projectService.getProject(+params['id']))
      .subscribe(project => this.currentProject = project);
  }

}
