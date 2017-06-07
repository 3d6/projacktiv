import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainNavigationComponent
  ],
  exports: [
    MainNavigationComponent
  ]
})
export class NavigationModule { }
