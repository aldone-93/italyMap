import { Component, OnInit, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent{
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor() { }

  @Input() options;

  async ngOnChanges() {
      this.viewContainer.clear();
      this.options = await Promise.resolve([
        {
            type: 'module',
            remoteEntry: 'http://localhost:5000/remoteEntry.js',
            exposedModule: './GeoJsonMap',

            displayName: 'GeoJsonMap',
            componentName: 'GeoJsonMapComponent'
        }
    ]);
      const Component = await loadRemoteModule(this.options)
          .then(m => m[this.options.componentName]);

      // Ivy --> ViewEngine
      const compRef = this.viewContainer.createComponent(Component);

      // const compInstance = compRef.instance;
      // compInstance.a = 'xx'
      // compInstance.onChange.subscribe(...)
      // compInstance.m();

  }
}
