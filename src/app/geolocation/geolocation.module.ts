import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { EsriLoaderService } from 'angular2-esri-loader';
import { EsriFactoryService } from './esri-factory.service';


@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    MapComponent,
  ],
  providers: [
    EsriLoaderService,
    EsriFactoryService
  ],
})
export class GeolocationModule { }
