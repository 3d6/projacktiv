import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectEditorComponent} from './project-editor/project-editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectEditorComponent
  ],
  exports: [
    ProjectEditorComponent
  ]
})
export class ProjectModule { }
