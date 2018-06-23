import { TestBed, inject } from '@angular/core/testing';

import { FirestoreCargamentoEnvioService } from './firestore-cargamento-envio.service';

describe('FirestoreCargamentoEnvioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreCargamentoEnvioService]
    });
  });

  it('should be created', inject([FirestoreCargamentoEnvioService], (service: FirestoreCargamentoEnvioService) => {
    expect(service).toBeTruthy();
  }));
});
