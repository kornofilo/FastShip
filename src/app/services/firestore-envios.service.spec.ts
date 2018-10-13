import { TestBed, inject } from '@angular/core/testing';

import { FirestoreEnviosService } from './firestore-envios.service';

describe('FirestoreEnviosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreEnviosService]
    });
  });

  it('should be created', inject([FirestoreEnviosService], (service: FirestoreEnviosService) => {
    expect(service).toBeTruthy();
  }));
});
