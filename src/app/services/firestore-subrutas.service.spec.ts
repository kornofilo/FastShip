import { TestBed, inject } from '@angular/core/testing';

import { FirestoreSubrutasService } from './firestore-subrutas.service';

describe('FirestoreSubrutasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreSubrutasService]
    });
  });

  it('should be created', inject([FirestoreSubrutasService], (service: FirestoreSubrutasService) => {
    expect(service).toBeTruthy();
  }));
});
