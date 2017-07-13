import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectViewerComponent } from './project/project-viewer/project-viewer.component';
import { ProjectEditorComponent } from './project/project-editor/project-editor.component';
import { ProjectOverviewComponent } from './project/project-overview/project-overview.component';
import { MapComponent } from './geolocation/map/map.component';
import { WelcomeComponent } from './navigation/welcome/welcome.component';
import { EsriFactoryService } from './geolocation/esri-factory.service';

const routes: Routes = [{
  path: '',
  resolve: { esriModules: EsriFactoryService },
  children: [
    { path: '', redirectTo: 'welcome', pathMatch: 'full', data: { breadcrumb: ''}},
    { path: 'welcome', component: WelcomeComponent, data: { breadcrumb: ''}},
    { path: 'projectoverview', component: ProjectOverviewComponent, data: { breadcrumb: 'Projects'},
      children: [
        { path: 'viewer/:id', component: ProjectViewerComponent, data: { breadcrumb: 'Project Viewer'} },
        { path: 'editor/:id', component: ProjectEditorComponent, data: { breadcrumb: 'Project Editor'} },
      ]
    },
    { path: 'mapview', component: MapComponent, data: { breadcrumb: 'Map'}},
  ]},
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ EsriFactoryService ]
})
export class AppRoutingModule { }
