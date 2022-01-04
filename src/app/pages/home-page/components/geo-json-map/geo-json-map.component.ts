import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import regions from '../../../../../assets/geoJson/regions.json';
import provinces from '../../../../../assets/geoJson/provinces.json';
import municipality from '../../../../../assets/geoJson/municipalities.json';

@Component({
  selector: 'app-geo-json-map',
  templateUrl: './geo-json-map.component.html',
  styleUrls: ['./geo-json-map.component.scss']
})
export class GeoJsonMapComponent implements AfterViewInit {

  private map;
  private stateLayer;
  private provincieLayer;
  private municipalities;
  eventLog;
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 43, 12 ],
      zoom: 6
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 6,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private initStatesLayer() {
    this.stateLayer = L.geoJSON(regions, {
      style: (feature) => ({
        weight: 1,
        color: '#000',
        fillOpacity: 0,
        fillColor: '#6DB65B'
      }),
      onEachFeature: (feature, layer) => (
        layer.bindPopup(this.makeCapitalPopup(feature.properties)),
        layer.on({
          mouseover: (e) => {
            this.eventLog = e.target.feature.properties.reg_istat_code_num
          },
        })
      )
    });
    this.provincieLayer = L.geoJSON(provinces, {
      style: (feature) => ({
        weight: 1,
        color: '#000',
        fillOpacity: 0,
        fillColor: '#6DB65B'
      }),
      onEachFeature: (feature, layer) => (
        layer.on({
          mouseover: (e) => {
            this.eventLog = e.target.feature.properties.prov_istat_code_num;
            this.makeCapitalPopup(e.target.feature.properties);
          },
        })
      )
    });
    this.municipalities = L.geoJSON(municipality, {
      style: (feature) => ({
        weight: 1,
        color: '#000',
        fillOpacity: 0,
        fillColor: '#6DB65B'
      }),
      onEachFeature: (feature, layer) => (
        layer.on({
          mouseover: (e) => {
            this.eventLog = e.target.feature.properties.com_istat_code_num
          },
        })
      )
    });
    this.map.addLayer(this.stateLayer);
}

  ngAfterViewInit(): void {
    this.initMap();
    this.initStatesLayer();
    this.map.on('zoomend', (e) => {
      this.zoomChangeEvent();
    });
  }
  makeCapitalPopup(data: any): string {
    return `` +
      `<div>Regione: ${ data.reg_name }</div>` +
      `<div>Provincia: ${ data.prov_name }</div>` +
      `<div>Comune: ${ data.name }</div>`
  }
  zoomChangeEvent(): void {

    switch (this.map.getZoom()) {
      case 6:
        this.clean_map();
        this.map.addLayer(this.stateLayer)
        break;
      case 8:
        this.clean_map();
        this.map.addLayer(this.provincieLayer)
        break;
      case 10:
        this.clean_map();
        this.map.addLayer(this.municipalities)
        break;
      default:
        break;
    }
  }
  clean_map() {
    this.map.eachLayer((layer) => {
        if (layer instanceof L.GeoJSON) {
            this.map.removeLayer(layer);
        }
    });
}
}
