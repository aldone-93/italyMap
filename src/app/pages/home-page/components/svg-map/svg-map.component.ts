import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.scss']
})
export class SvgMapComponent implements OnInit{
  ngOnInit(): void {
    const regionPaths: Array<SVGPathElement> = Array.from(document.getElementsByTagName('path')); 
    regionPaths.forEach((region:SVGPathElement) => {
      region.addEventListener('click', (e) => { this.selectRegion(e)})
    });
  }

  selectRegion(e): void{
    alert(e)
  }
}