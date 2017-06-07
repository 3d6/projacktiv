import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectEditorComponent } from './project-editor/project-editor.component';
import { ProjectViewerComponent } from './project-viewer/project-viewer.component';
import { ProjectService } from './project.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProjectEditorComponent,
    ProjectViewerComponent
  ],
  exports: [
    ProjectEditorComponent,
    ProjectViewerComponent
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectModule { }
