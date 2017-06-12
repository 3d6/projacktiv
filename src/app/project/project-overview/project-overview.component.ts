import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.less']
})
export class ProjectOverviewComponent implements OnInit {

  public projectList: Array<{id: number, title: string}>;

  constructor(private projectService: ProjectService) {
    this.projectList = new Array();
  }

  ngOnInit() {
      this.projectService.getProjectOverview().then(projects => this.projectList = projects);
  }

}
