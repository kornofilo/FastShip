import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Subruta } from '../classes/subruta';

@Injectable({
  providedIn: 'root'
})

export class FirestoreSubrutasService {
  subRutacollection: AngularFirestoreCollection<Subruta>;
  subRutas: Observable<Subruta[]>;
  subRiutaDoc: AngularFirestoreDocument<Subruta>;

  constructor(public _afs: AngularFirestore) {
    this.subRutacollection = this._afs.collection('/subrutas');
    this.subRutas = this.subRutacollection.snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Subruta;
            data.id = a.payload.doc.id;
            return data;
          });

      }));
   }


getSubRutas() {
  return this.subRutas;
}

addSubruta(subruta) {
  this.subRutacollection.add(subruta);
}

}