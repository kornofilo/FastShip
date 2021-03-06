import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, take, last, switchMap } from 'rxjs/operators';
import { Envios } from '../classes/envios';



@Injectable({
  providedIn: 'root'
})
export class FirestoreEnviosService {
  public enviosCollection: AngularFirestoreCollection<Envios>;
  envios: Observable<Envios[]>;
  envio: Observable<Envios>;
  enviosDoc: AngularFirestoreDocument<Envios>;
  arrEnvios: Envios[];
  newNumTracking: number;
  private ultNumTracking: number[];

  constructor(public _afs: AngularFirestore) {

  }

  getTiendasType(origen: string) {
    this.enviosCollection = this._afs.collection('/guias', ref => {
      return ref
              .where('detalles.origen', '==', origen)
              .where('estado', '==', 'Recibido');
      });
    this.envios = this.enviosCollection.snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Envios;
            data.id = a.payload.doc.id;
            return data;
        });
      }));
    return this.envios;
  }

  getEnviosByOrigAndDest(origen,destino) {
    console.log(origen,destino);
    this.enviosCollection = this._afs.collection('/guias', ref => {
      return ref
              .where('detalles.origen', '==', origen)
              .where('detalles.destino', '==', destino);
      });
    this.envios = this.enviosCollection.snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Envios;
            data.id = a.payload.doc.id;
            return data;
        });
      }));
    return this.envios;
  }

  getDetalleType(transporte: string) {
    this.enviosCollection = this._afs.collection('/guias', ref => {
      return ref
              .where('idTransporte', '==', transporte)
              .where('estado', '==', 'Cargado');
      });
    this.envios = this.enviosCollection.snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Envios;
            data.id = a.payload.doc.id;
            return data;
        });
      }));
    return this.envios;
  }

  getEnvios() {
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
    return this.envios;
  }

  getHistorialEnvios(tn) {
    this.enviosDoc = this._afs.doc('guias/' + tn);
    this.envio = this.enviosDoc.valueChanges();
    return this.envio;
  }

  addEnvio(newEnvio) {
    this.enviosCollection.doc('FS-' + this._afs.createId()).set(newEnvio);
  }

  asignarTrasporte(iE, transport) {
    this.enviosDoc = this._afs.doc('guias/' + iE);
    this.enviosDoc.update({
      idTransporte: transport
    });
  }

  updateEstadoEnvio(iE, newHistorial) {
  this.enviosDoc = this._afs.doc('guias/' + iE);
    this.enviosDoc.update({
      estado: newHistorial.estado,
      ['historial.' + newHistorial.fecha]: newHistorial
    });
  }
}
