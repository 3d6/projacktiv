import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { log } from 'util';

@Component({
  selector: 'app-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.less']
})
export class ProjectEditorComponent implements OnInit {

  public currentProject: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
    this.currentProject = new Project();
    log('done constructing');
  }

// The switchMap operator maps the id in the Observable route parameters to a new Observable,
// the result of the HeroService.getHero() method.
// The id is a number. Route parameters are always strings. So the route parameter value is
// converted to a number with the JavaScript (+) operator.

  ngOnInit() {
    // (+) converts string 'id' to a number
    this.route.params
      .switchMap((params: Params) => this.projectService.getProject(+params['id']))
      .subscribe(project => this.currentProject = project);
  }

  public saveProject(): void {
    console.log('saving project');
    this.projectService.saveProject(this.currentProject).then(
      p => {
        const isNew = !(this.currentProject.id > 0);
        this.currentProject = p;
        if (! isNew) {
          this.router.navigate(['/editor/' + p.id]);
        }
      }
    );
  }

  public newProject(): void {
    console.log('creating new project');
    this.projectService.createProject().then(
      p => {
        log('created new project: ' + p.id);
        this.router.navigate(['/editor/' + p.id]);
      }
    );
  }
}
