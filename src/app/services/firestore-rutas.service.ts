import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Rutas } from '../classes/rutas';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class FirestoreRutasService {
  Rutacollection: AngularFirestoreCollection<Rutas>;
  Rutas: Observable<Rutas[]>;
  RutasDoc: AngularFirestoreDocument<Rutas>;

  constructor(public _afs: AngularFirestore) {
}

getRutas() {
  this.Rutacollection = this._afs.collection('/rutas');
    this.Rutas = this.Rutacollection.snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Rutas;
            data.id = a.payload.doc.id;
            return data;
          });
    }));
  return this.Rutas;
}


addRutas(rutas) {
  this.Rutacollection.add(rutas);
}

updateRuta(iME, rutas) {
  this.RutasDoc = this._afs.doc('rutas/' + iME);
  this.RutasDoc.update(rutas);
}
onInsert(iME, rutas) {
  this.RutasDoc = this._afs.doc('rutas/' + iME);
  this.RutasDoc.update(rutas);
  return this.Rutas;
}

}

