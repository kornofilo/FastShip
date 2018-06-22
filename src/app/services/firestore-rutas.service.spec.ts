import { TestBed, inject } from '@angular/core/testing';

import { FirestoreRutasService } from './firestore-rutas.service';

describe('FirestoreRutasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreRutasService]
    });
  });

  it('should be created', inject([FirestoreRutasService], (service: FirestoreRutasService) => {
    expect(service).toBeTruthy();
  }));
});
