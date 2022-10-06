import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { GeoJsonMapComponent } from './components/geo-json-map/geo-json-map.component';


@NgModule({
  declarations: [HomePageComponent, GeoJsonMapComponent],
  imports: [
    CommonModule,
    
  ],
})
export class HomePageModule { 
}
