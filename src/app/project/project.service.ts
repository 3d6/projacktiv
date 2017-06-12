import { Injectable } from '@angular/core';
import { Project } from './project';
import {log} from 'util';

@Injectable()
export class ProjectService {

  private projects: Array<Project>;
  private idCounter: number;

  constructor() {
    this.idCounter = 0;
    this.projects = new Array<Project>();
    this.createDummyProject();
    this.createDummyProject();
  }

  public getProjectOverview(): Promise<Array<{id: number, title: string}>> {
    log('>><< ProjectService.getProjectOverview()');
    return new Promise((resolve) => {
      const projectList = this.getProjects().map(project => {
        return {
          id: project.id,
          title: project.name
        };
      });
      resolve(projectList);
    });
  }

  public getProject(id: number = 0): Promise<Project> {
    return new Promise((resolve) => {
        const project = this.getProjects().find(p => p.id === id);
        resolve(project);
      });
    }

  public createProject(): Promise<Project> {
    log('>><< ProjectService.createProject()');
    return this.saveProject(this.createNewProject());
  }

  public saveProject(project: Project): Promise<Project> {
    log('>> ProjectService.saveProject()');
    return new Promise((resolve) => {
        if (project.id <= 0) {
          project.id = this.generateProjectId();
        }
        this.projects.push(project);
        resolve(project);
      }
    );
  }

  private createNewProject(id: number = 0): Project {
    const project = new Project(id);
    project.name = '';
    project.description = '';
    return project;
  }

  private createDummyProject(): Project {
    const id = this.generateProjectId();
    const project = new Project(id);
    project.name = 'Golden Project No.' + id;
    project.description = 'This is my ' + id + 'th Project. I love it. It is lovely!';
    this.projects.push(project);
    return project;
  }

  private generateProjectId(): number {
    this.idCounter++;
    // log('current id counter at:{this.idCounter}');
    return this.idCounter;
  }

  private getProjects(): Array<Project> {
    return this.projects;
  }

}
