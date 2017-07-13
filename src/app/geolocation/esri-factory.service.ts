import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EsriLoaderService } from 'angular2-esri-loader';
import { EsriServices } from 'app/geolocation/esri-services';

// https://github.com/tomwayson/esri-angular-cli-example/
// blob/ab4540912904cf78ccfd904fb3bfa4c69b4aa1da/src/app/esri-map/esri-map-resolve.service.ts

@Injectable()
export class EsriFactoryService implements Resolve<any> {

  // use a specific version of the API instead of the latest
  private ESRI_API_URL = '//js.arcgis.com/3.20/';

  private esriServiceProvider: EsriServices;

  constructor(private readonly esriLoader: EsriLoaderService) { }

  public get ready(): boolean {
    return !!this.esriServiceProvider;
  }

  public resolve() {
    // only load the ArcGIS API wehen we got to this route
    return this.esriLoader.load({
      // use a specific version of the API instead of the latest
      url: this.ESRI_API_URL
    }).then(() => {
      this.loadModules();
    });
  }

  private loadModules() {
    // load the map class needed to create a new map
    // and make it available in the route's data
    this.esriLoader.loadModules([
      'esri/map',
      'esri/views/MapView',
    ]).then(([
       Map,
       MapView,
    ]) => {
      this.esriServiceProvider = new EsriServices(Map, MapView);
      console.log('Loaded Esri Modules');
    });
  }

}
