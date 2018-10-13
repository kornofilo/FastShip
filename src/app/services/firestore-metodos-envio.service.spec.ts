import { TestBed, inject } from '@angular/core/testing';

import { FirestoreMetodosEnvioService } from './firestore-metodos-envio.service';

describe('FirestoreMetodosEnvioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreMetodosEnvioService]
    });
  });

  it('should be created', inject([FirestoreMetodosEnvioService], (service: FirestoreMetodosEnvioService) => {
    expect(service).toBeTruthy();
  }));
});
