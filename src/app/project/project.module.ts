import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectEditorComponent } from './project-editor/project-editor.component';
import { ProjectViewerComponent } from './project-viewer/project-viewer.component';
import { ProjectService } from './project.service';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ProjectEditorComponent,
    ProjectViewerComponent,
    ProjectOverviewComponent
  ],
  exports: [
    ProjectEditorComponent,
    ProjectViewerComponent,
    ProjectOverviewComponent
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectModule { }
