import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SvgMapComponent } from './components/svg-map/svg-map.component';
import { GeoJsonMapComponent } from './components/geo-json-map/geo-json-map.component';


@NgModule({
  declarations: [SvgMapComponent,HomePageComponent, GeoJsonMapComponent],
  imports: [
    CommonModule,
  ],
})
export class HomePageModule { 
}
