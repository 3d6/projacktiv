import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MainNavigationComponent,
    BreadcrumbComponent,
    WelcomeComponent
  ],
  exports: [
    MainNavigationComponent,
    BreadcrumbComponent,
    WelcomeComponent
  ]
})
export class NavigationModule { }
