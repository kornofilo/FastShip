import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Oficina } from '../classes/oficina';

@Injectable({
  providedIn: 'root'
})
export class FirestoreOficinaService {
  oficinasCollection: AngularFirestoreCollection<Oficina>;
  oficinas: Observable<Oficina[]>;
  oficinasDoc: AngularFirestoreDocument<Oficina>;
  constructor(public _afs: AngularFirestore) {
    this.oficinasCollection = this._afs.collection('/oficinas');
    this.oficinas = this.oficinasCollection.snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Oficina;
            data.id = a.payload.doc.id;
            return data;
          });

      }));
  }

  getOficinas() {
    return this.oficinas;
  }
}
