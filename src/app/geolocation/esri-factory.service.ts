import { Injectable, ElementRef } from '@angular/core';
import { Resolve } from '@angular/router';
import { EsriLoaderService } from 'angular2-esri-loader';

// https://github.com/tomwayson/esri-angular-cli-example/
// blob/ab4540912904cf78ccfd904fb3bfa4c69b4aa1da/src/app/esri-map/esri-map-resolve.service.ts

@Injectable()
export class EsriFactoryService implements Resolve<any> {

  // use a specific version of the API instead of the latest
  private ESRI_API_URL = '//js.arcgis.com/3.21/';

  private provider: any;

  constructor(private readonly esriLoader: EsriLoaderService) { }

  public get ready(): boolean {
    return !!this.provider;
  }

  public createMap(elementId: ElementRef, initialPosition: any = [9.886122, 51.814242], initialZoom: number = 16): __esri.Map {
    return new this.provider.Map(elementId, {
      basemap: 'satellite',
      center: initialPosition,
      zoom: initialZoom,
      slider: false,
      logo: false
    });
  }

  public createSearchUtil(elementId: ElementRef, map: __esri.Map): __esri.Search {
    return new this.provider.Search({map}, elementId );
  }

  public createDrawToolBar(map: __esri.Map): any {
    return new this.provider.Draw(map);
  }

  /**
   * Loading on page load but after the guard, so it has to be resolved manually in app-routing.moule.ts
   * @returns {Promise<TResult2|TResult1>}
   */
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
      'esri/graphic',
      'esri/toolbars/draw',
      'esri/toolbars/edit',

      'esri/geometry/Point',
      'esri/geometry/Polyline',
      'esri/geometry/Polygon',

      'esri/symbols/SimpleMarkerSymbol',
      'esri/symbols/SimpleLineSymbol',
      'esri/symbols/SimpleFillSymbol',

      'dojo/parser',
      'dijit/registry',

      'esri/dijit/Search',
    ]).then(([
      Map, Graphic, Draw, Edit,
      Point, Polyline, Polygon,
      SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol,
      Parser, Registry,
      Search,
    ]) => {
      this.provider = {
        Map, Graphic, Draw, Edit,
        Point, Polyline, Polygon,
        SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol,
        Parser, Registry,
        Search, };
      console.log('Loaded Esri Modules');
    });
  }

}
