import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { MetodosEnvio } from '../classes/metodos-envio';

@Injectable({
  providedIn: 'root'
})
export class FirestoreMetodosEnvioService {
  metodosEnvioCollection: AngularFirestoreCollection<MetodosEnvio>;
  metodosEnvio: Observable<MetodosEnvio[]>;
  metodosEnvioDoc: AngularFirestoreDocument<MetodosEnvio>;
  constructor(public _afs: AngularFirestore) {
    this.metodosEnvioCollection = this._afs.collection('/metodosEnvio');
    this.metodosEnvio = this.metodosEnvioCollection.snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as MetodosEnvio;
            data.id = a.payload.doc.id;
            return data;
          });

      }));
  }

  getMetodosEnvio() {
    return this.metodosEnvio;
  }
  addMetodosEnvio(metodosEnvio) {
    this.metodosEnvioCollection.add(metodosEnvio);
  }
  deleteMetodosEnvio(metodosEnvio) {
    this.metodosEnvioDoc = this._afs.doc('metodosEnvio/' + metodosEnvio.id);
    this.metodosEnvioDoc.delete();
  }

  updateMetodosEnvio(iME, tiempoNew: string, tiposNew: string[]) {
    console.log(tiposNew);
    this.metodosEnvioDoc = this._afs.doc('metodosEnvio/' + iME);
    this.metodosEnvioDoc.update({
     tiempo : tiempoNew,
     tipos: tiposNew
    });
  }
}
