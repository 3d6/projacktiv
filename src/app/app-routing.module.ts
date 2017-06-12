import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectViewerComponent} from './project/project-viewer/project-viewer.component';
import {ProjectEditorComponent} from './project/project-editor/project-editor.component';

const routes: Routes = [
  { path: 'viewer/:id',    component: ProjectViewerComponent, data: { breadcrumb: 'Project Viewer'} },
  { path: 'editor/:id',    component: ProjectEditorComponent, data: { breadcrumb: 'Project Editor'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
