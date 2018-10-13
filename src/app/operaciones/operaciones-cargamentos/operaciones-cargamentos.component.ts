import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare let $: any;
import { Subscription } from 'rxjs';
import { Oficina } from '../../classes/oficina';
import { Transporte } from '../../classes/transporte';
// Firebase
import { AuthService } from '../../services/auth.service';
import { FirestoreOficinaService } from '../../services/firestore-oficina.service'
import { FirestoreTransportesEnvioService} from '../../services/firestore-transportes-envio.service';
@Component({
  selector: 'app-operaciones-cargamentos',
  templateUrl: './operaciones-cargamentos.component.html',
  styleUrls: ['./operaciones-cargamentos.component.css']
})
export class OperacionesCargamentosComponent implements  OnInit, OnDestroy {

  arrmiTienda:Oficina[] = [];
  arrmiTransporte:Transporte[] = [];

  // Suscripcipción
  private firestoremiTiendaSubscription: Subscription;
  private firestoremiTransporteSubscription: Subscription;

  constructor(public authService: AuthService,
     public _mistienda: FirestoreOficinaService,public _mistransporte: FirestoreTransportesEnvioService, private fb: FormBuilder) {
  }

  ngOnInit() {

      // Obtenemos las Oficinas
      this.firestoremiTiendaSubscription = this._mistienda.getOficinas().subscribe(
        (oficinas: Oficina[]) => {
        this.arrmiTienda = oficinas;
          }
      );
      // Obtenemos los Transporte
      this.firestoremiTransporteSubscription = this._mistransporte.getTransporte().subscribe(
        (transporte: Transporte[]) => {
        this.arrmiTransporte = transporte;
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
    this.firestoremiTiendaSubscription.unsubscribe();
this.firestoremiTransporteSubscription.unsubscribe();
  }


}
