import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { EsriLoaderService } from 'angular2-esri-loader';
import { EsriFactoryService } from './esri-factory.service';
import { ButtonsModule, PopoverModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    PopoverModule.forRoot(),
    ButtonsModule.forRoot(),
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
