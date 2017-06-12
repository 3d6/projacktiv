import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MainNavigationComponent,
    BreadcrumbComponent
  ],
  exports: [
    MainNavigationComponent,
    BreadcrumbComponent
  ]
})
export class NavigationModule { }
