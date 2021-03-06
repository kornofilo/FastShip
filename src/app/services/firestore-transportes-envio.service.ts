import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Transporte } from '../classes/transporte';


@Injectable({
  providedIn: 'root'
})
export class FirestoreTransportesEnvioService {
  transporteCollection: AngularFirestoreCollection<Transporte>;
  transporte: Observable<Transporte[]>;
  transporteDoc: AngularFirestoreDocument<Transporte>;


  constructor(public _afs: AngularFirestore) {
  }

  getTransporteType(transporte: string) {
    this.transporteCollection = this._afs.collection('/transporte', ref => {
      return ref
              .where('oficinaAsig', '==', transporte);
      });
    this.transporte = this.transporteCollection.snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Transporte;
            data.id = a.payload.doc.id;
            return data;
        });
      }));
    return this.transporte;
  }

  gettranspEstadoType() {
    this.transporteCollection = this._afs.collection('/transporte', ref => {
      return ref
              .where('estado', '==', 'cargado');
      });
    this.transporte = this.transporteCollection.snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Transporte;
            data.id = a.payload.doc.id;
            return data;
        });
      }));
    return this.transporte;
  }

    getTransporte() {
      this.transporteCollection = this._afs.collection('/transporte');
      this.transporte = this.transporteCollection.snapshotChanges().pipe(map(
        changes => {
          return changes.map(
            a => {
              const data = a.payload.doc.data() as Transporte;
              data.id = a.payload.doc.id;
              return data;
            });

        }));

      return this.transporte;
    }

    getTransporteRegType(transporte: string) {
      this.transporteCollection = this._afs.collection('/transporte', ref => {
        return ref
                .where('oficinaAsig', '==', transporte);
        });
      this.transporte = this.transporteCollection.snapshotChanges().pipe(map(
        changes => {
          return changes.map(
            a => {
              const data = a.payload.doc.data() as Transporte;
              data.id = a.payload.doc.id;
              return data;
          });
        }));
      return this.transporte;
    }

    addTransporte(transporte) {
      this.transporteCollection.add(transporte).
      then()
      .catch();
    }

    deleteTransporte(transporte) {
      this.transporteDoc = this._afs.doc('transporte/' + transporte.id);
      this.transporteDoc.delete();
      // toast('Metodo de Envío eliminado de manera Exitosa.', 4000);
    }

    updateTransporte(iME, updTransporte) {
      this.transporteDoc = this._afs.doc('transporte/' + iME);
      this.transporteDoc.update(updTransporte);
    }
}
