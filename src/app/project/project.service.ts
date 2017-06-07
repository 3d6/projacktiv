import { Injectable } from '@angular/core';
import {Project} from './project';

@Injectable()
export class ProjectService {

  private project: Project;

  constructor() {
    this.project = this.createNewProject(1);
  }

  public getProject(id: number = 0) {
    return this.project;
  }

  public createProject() {
    this.project = this.createNewProject();
    return this.getProject();
  }

  private createNewProject(id: number = 0) {
    const new_project = new Project(id);
    new_project.name = 'Golden Project';
    new_project.description = 'This is my first Project. I love it. It is lovely!';
    return new_project;
  }

}
