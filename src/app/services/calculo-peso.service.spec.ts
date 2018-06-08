import { TestBed, inject } from '@angular/core/testing';

import { CalculoPesoService } from './calculo-peso.service';

describe('CalculoPesoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculoPesoService]
    });
  });

  it('should be created', inject([CalculoPesoService], (service: CalculoPesoService) => {
    expect(service).toBeTruthy();
  }));
});
