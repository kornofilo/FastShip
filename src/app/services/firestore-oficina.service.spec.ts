import { TestBed, inject } from '@angular/core/testing';

import { FirestoreOficinaService } from './firestore-oficina.service';

describe('FirestoreOficinaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreOficinaService]
    });
  });

  it('should be created', inject([FirestoreOficinaService], (service: FirestoreOficinaService) => {
    expect(service).toBeTruthy();
  }));
});
