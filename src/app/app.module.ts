import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { ProjectEditorComponent } from './project/project-editor/project-editor.component';
import { ProjectModule } from './project/project.module';
import { MainNavigationComponent } from './navigation/main-navigation/main-navigation.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NavigationModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
