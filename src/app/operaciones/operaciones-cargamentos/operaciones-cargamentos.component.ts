import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare let $: any;
import { Subscription } from 'rxjs';
import { Cargamento } from '../../classes/cargamento';
import { Oficina } from '../../classes/oficina';

// Firebase
import { AuthService } from '../../services/auth.service';
import {  FirestoreCargamentoEnvioService} from '../../services/firestore-cargamento-envio.service';
import { FirestoreOficinaService } from '../../services/firestore-oficina.service'

@Component({
  selector: 'app-operaciones-cargamentos',
  templateUrl: './operaciones-cargamentos.component.html',
  styleUrls: ['./operaciones-cargamentos.component.css']
})
export class OperacionesCargamentosComponent implements  OnInit, OnDestroy {

  arr: Cargamento[] = [];
  arrmiTienda:Oficina[] = [];

  // Suscripcipción
  private firebaseSubscription: Subscription;
  private firestoremiTiendaSubscription: Subscription;



  constructor(public authService: AuthService, public _data: FirestoreCargamentoEnvioService,
     public _mistienda: FirestoreOficinaService, private fb: FormBuilder) {
  }

  ngOnInit() {
      // Obtenemos los cargameto
      this.firebaseSubscription = this._data.getCargamento().subscribe(
      (cargamento: Cargamento[]) => {
         this.arr = cargamento;
           console.log(this.arr);
       }
      );

      // Obtenemos las Oficinas
      this.firestoremiTiendaSubscription = this._mistienda.getOficinas().subscribe(
        (oficinas: Oficina[]) => {
        this.arrmiTienda = oficinas;
          }
      );

    // Inicialización de los elementos de Materialize que requieren Jquery.
    $(function() {
    $('.collapsible').collapsible();
      $('select').formSelect();
      $('.modal').modal();
    });

  }

  // Finalizamos la suscripción con el servicio al cerrar el componente.
  ngOnDestroy() {
    this.firebaseSubscription.unsubscribe();
    this.firestoremiTiendaSubscription.unsubscribe();

  }


}
