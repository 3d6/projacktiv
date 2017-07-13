import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EsriFactoryService } from '../esri-factory.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  public togleDrawModel: String;

  @ViewChild('mapViewNode')
  private esriMap: ElementRef;

  @ViewChild('searchViewNode')
  private esriSearch: ElementRef;

  // for JSAPI 4.x you can use the "any for TS types
  private map: __esri.Map;
  private search: __esri.Search;
  private drawingToolBar: any;

  constructor(private mapProvider: EsriFactoryService) { }

  ngOnInit() {
    this.map = this.mapProvider.createMap(this.esriMap.nativeElement);
    this.search = this.mapProvider.createSearchUtil(this.esriSearch.nativeElement, this.map);
    this.drawingToolBar = this.mapProvider.createDrawToolBar(this.map);
  }

}
