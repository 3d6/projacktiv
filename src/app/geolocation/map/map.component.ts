import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EsriFactoryService } from '../esri-factory.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  public togleDrawModel: String;
  public togleDrawModelDisabled: String;

  @ViewChild('mapViewNode')
  private esriMap: ElementRef;

  @ViewChild('searchViewNode')
  private esriSearch: ElementRef;

  // for JSAPI 4.x you can use the "any for TS types
  private map: any;
  private search: any;
  private drawingToolBar: any;
  private editToolBar: any;

  private drawingToolGeometry: String;
  private polygonSymbol: any;

  // shortcuts
  private Edit: any;

  constructor(private provider: EsriFactoryService) {
  }

  ngOnInit() {
    this.togleDrawModel = 'false';
    this.togleDrawModelDisabled = 'false';
    this.Edit = this.provider.Edit;
    this.drawingToolGeometry = this.provider.Polygon;
    this.polygonSymbol = this.provider.SimpleFillSymbol;

    this.map = this.provider.createMap(this.esriMap.nativeElement);
    this.map.on('load', () => this.initTools());
  }

  private initTools() {
    this.search = this.provider.createSearchUtil(this.esriSearch.nativeElement, this.map);

    this.drawingToolBar = this.provider.createDrawToolBar(this.map);
    this.drawingToolBar.on('draw-end', (evt) => this.addToMap(evt));

    this.editToolBar = this.provider.createEditToolBar(this.map);
    this.map.graphics.on('click', (evt) => this.onClickEditable(evt));
    this.map.on('click', (evt) => this.onClickNotEditable(evt));
  }

  public toggleDrawTool(): void {
    if (this.togleDrawModelDisabled === 'true') {
      console.log('wont draw in edit mode');
      return;
    }

    if (this.togleDrawModel === 'true') {
      console.log('enable drawing tool');
      this.map.disableMapNavigation();
      this.drawingToolBar.activate(this.drawingToolGeometry);
    } else {
      console.log('disable drawing tool');
      this.drawingToolBar.deactivate();
      this.map.enableMapNavigation();
    }
  }

  private addToMap(evt: any) {
    this.drawingToolBar.deactivate();
    const graphic = this.provider.createGraphic(evt.geometry, this.polygonSymbol);
    this.map.graphics.add(graphic);
    this.map.enableMapNavigation();
    this.togleDrawModel = 'false';
    console.log('add polygon to map');
  }

  private onClickEditable(evt: any) {
    if (this.togleDrawModel === 'true') {
      console.log('wont edit in draw mode');
      return;
    } else {
      this.togleDrawModelDisabled = 'true';
    }

    console.log('enable edit mode');
    this.provider.event.stop(evt);

    // specify toolbar options
    const options = {
      allowAddVertices: true,
      allowDeleteVertices: true,
      uniformScaling: true
    };

    // specify toolbar tools
    /* tslint:disable:no-bitwise */
    const tools = ( 0 | this.Edit.MOVE | this.Edit.EDIT_VERTICES | this.Edit.SCALE | this.Edit.ROTATE);
    /* tslint:enable:no-bitwise */

    // activate toolbar
    this.editToolBar.activate(tools, evt.graphic, options);
  }

  private onClickNotEditable(evt: any) {
    if (this.togleDrawModel === 'true') {
      console.log('wont edit in draw mode');
      return;
    }

    console.log('disable edit mode');
    this.editToolBar.deactivate();
    this.togleDrawModelDisabled = 'false';
  }

}
