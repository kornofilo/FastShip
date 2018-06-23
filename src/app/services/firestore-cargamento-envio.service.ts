import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Cargamento } from '../classes/cargamento';

// Toast de Materialize para notificaciones de acciones.
// import { toast } from 'angular2-materialize';

@Injectable({
  providedIn: 'root'
})
export class FirestoreCargamentoEnvioService {
  cargamentoCollection: AngularFirestoreCollection<Cargamento>;
  cargamento: Observable<Cargamento[]>;
  cargamentoDoc: AngularFirestoreDocument<Cargamento>;
  constructor(public _afs: AngularFirestore) {
    this.cargamentoCollection = this._afs.collection('/cargamento', ref => ref.orderBy('id'));
    this.cargamento = this.cargamentoCollection.snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Cargamento;
            data.id = a.payload.doc.id;
            return data;
          });

      }));
  }

    getCargamento() {
      return this.cargamento;
    }

    addCargamento(cargamento) {
      this.cargamentoCollection.add(cargamento);
    }

    deleteCargamento(cargamento) {
      this.cargamentoDoc = this._afs.doc('cargamento/' + cargamento.id);
      this.cargamentoDoc.delete();
      // toast('Metodo de Envío eliminado de manera Exitosa.', 4000);
    }

    updateCargamento(iME, updCargamento) {
      this.cargamentoDoc = this._afs.doc('cargamento/' + iME);
      this.cargamentoDoc.update(updCargamento);
    }
}
