import { Component, OnInit, OnDestroy } from '@angular/core';
declare let $: any;
import { Form } from '@angular/forms';
import { Envios } from '../../classes/envios';
import { Subscription } from 'rxjs';

// Firebase
import { AuthService } from '../../services/auth.service';
import { FirestoreEnviosService } from '../../services/firestore-envios.service';

@Component({
  selector: 'app-oficina-envios',
  templateUrl: './oficina-envios.component.html',
  styleUrls: ['./oficina-envios.component.css']
})
export class OficinaEnviosComponent implements OnInit, OnDestroy {
  formAddEnvio: Form;
  arr: Envios[] = [];
  newEnvio: Envios;
  idEnvio: string;
  private firestoreSubscription: Subscription;
  constructor(public authService: AuthService, public _data: FirestoreEnviosService) {}
  model = { numTracking: 0, remitente: {nombre: '', apellido: '', telefono: ''},
  destinatario: {nombre: '', apellido: '', telefono: '', direccion: ''},
  origen: '', fechaEnvio: '', tipoEnvio: '', descripcion: '',
  perecedero : false};
  private firebaseSubscription: Subscription;

  ngOnInit() {
    this.firebaseSubscription = this._data.getEnvios().subscribe(
      (oficina: Envios[]) => {
      this.arr = oficina;
      console.log(this.arr);
     }
    );

    $('select').formSelect();
    $('.modal').modal();
    $('.datepicker').datepicker({
        container: 'body'
      });
  }

  ngOnDestroy() {
    this.firestoreSubscription.unsubscribe();
  }

}
