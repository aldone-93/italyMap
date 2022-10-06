import { TestBed } from '@angular/core/testing';

import { GeoJsonMapService } from './geo-json-map.service';

describe('GeoJsonMapService', () => {
  let service: GeoJsonMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoJsonMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
