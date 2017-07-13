import { TestBed, inject } from '@angular/core/testing';

import { EsriFactoryService } from './esri-factory.service';

describe('EsriFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsriFactoryService]
    });
  });

  it('should be created', inject([EsriFactoryService], (service: EsriFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
