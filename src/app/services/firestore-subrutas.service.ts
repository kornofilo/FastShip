import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Subruta } from '../classes/subruta';
import { Rutas } from '../classes/rutas';

@Injectable({
  providedIn: 'root'
})

export class FirestoreSubrutasService {
  subRutacollection: AngularFirestoreCollection<Subruta>;
  subRutas: Observable<Subruta[]>;
  Rutas: Observable<Rutas[]>;
  subRiutaDoc: AngularFirestoreDocument<Subruta>;

  constructor(public _afs: AngularFirestore) {
   }
   getFiltroruta(nombre: string) {
    this.subRutacollection = this._afs.collection('/subrutas', ref => {
      return ref
              .where('rutapadre', '==', nombre);
      });
      this.subRutas = this.subRutacollection.snapshotChanges().pipe(map(
        changes => {
          return changes.map(
            a => {
              const data = a.payload.doc.data() as Subruta;
              data.id = a.payload.doc.id;
              return data;
            });
  
        }));
    return this.subRutas;
  }

getSubRutas() {
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
  return this.subRutas;
}
getRutas() {

}
addSubruta(subruta) {
  this.subRutacollection.add(subruta);
}

}
