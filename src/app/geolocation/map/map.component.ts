import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EsriFactoryService } from '../esri-factory.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  @ViewChild('mapViewNode') mapEl: ElementRef;

  // for JSAPI 4.x you can use the "any for TS types
  public mapView: __esri.MapView;

  constructor(private esriFactoryService: EsriFactoryService) { }

  ngOnInit() {

  }

}
