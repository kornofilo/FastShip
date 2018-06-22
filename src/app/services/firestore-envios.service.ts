import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Envios } from '../classes/envios';

@Injectable({
  providedIn: 'root'
})
export class FirestoreEnviosService {
  enviosCollection: AngularFirestoreCollection<Envios>;
  envios: Observable<Envios[]>;
  enviosDoc: AngularFirestoreDocument<Envios>;
  constructor(public _afs: AngularFirestore) {
    this.enviosCollection = this._afs.collection('/guias');
    this.envios = this.enviosCollection.snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Envios;
            data.id = a.payload.doc.id;
            return data;
          });

      }));
  }

  getEnvios() {
    return this.envios;
  }

  addEnvio(envios) {
    this.enviosCollection.add(envios);
  }
}
