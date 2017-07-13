import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { ProjectModule } from './project/project.module';
import { GeolocationModule } from './geolocation/geolocation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NavigationModule,
    ProjectModule,
    GeolocationModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
