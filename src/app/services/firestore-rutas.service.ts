import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Rutas } from '../classes/rutas';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class FirestoreRutasService {
  Rutacollection: AngularFirestoreCollection<Rutas>;
  Rutas: Observable<Rutas[]>;
  RutasDoc: AngularFirestoreCollection<Rutas>;

  constructor(public _afs: AngularFirestore) {
    this.Rutacollection = this._afs.collection('/rutas');
    this.Rutas = this.Rutacollection.snapshotChanges().pipe(map(
      changes =>{
        return changes.map(
          a =>{
            const data = a.payload.doc.data() as Rutas;
            data.id = a.payload.doc.id;
            return data;
          });
    }));
}

getRutas() {
  return this.Rutas;
}

addRutas(rutas) {
  this.Rutacollection.add(rutas);
}

}

