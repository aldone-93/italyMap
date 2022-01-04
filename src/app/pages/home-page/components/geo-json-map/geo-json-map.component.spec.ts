import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoJsonMapComponent } from './geo-json-map.component';

describe('GeoJsonMapComponent', () => {
  let component: GeoJsonMapComponent;
  let fixture: ComponentFixture<GeoJsonMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoJsonMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoJsonMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
