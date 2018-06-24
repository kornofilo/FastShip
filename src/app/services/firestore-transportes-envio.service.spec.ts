import { TestBed, inject } from '@angular/core/testing';

import { FirestoreTransportesEnvioService } from './firestore-transportes-envio.service';

describe('FirestoreTransportesEnvioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreTransportesEnvioService]
    });
  });

  it('should be created', inject([FirestoreTransportesEnvioService], (service: FirestoreTransportesEnvioService) => {
    expect(service).toBeTruthy();
  }));
});
