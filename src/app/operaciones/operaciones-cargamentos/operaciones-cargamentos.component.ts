import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare let $: any;
import { Subscription } from 'rxjs';
import { Cargamento } from '../../classes/cargamento';
import { Transporte } from '../../classes/transporte';
import { Envios } from '../../classes/envios';

// Firebase
import { AuthService } from '../../services/auth.service';
import {  FirestoreCargamentoEnvioService} from '../../services/firestore-cargamento-envio.service';
import { FirestoreTransportesEnvioService} from '../../services/firestore-transportes-envio.service';
import { FirestoreEnviosService } from '../../services/firestore-envios.service';

@Component({
  selector: 'app-operaciones-cargamentos',
  templateUrl: './operaciones-cargamentos.component.html',
  styleUrls: ['./operaciones-cargamentos.component.css']
})
export class OperacionesCargamentosComponent implements  OnInit, OnDestroy,OnChanges {

  arr: Cargamento[] = [];
  arrTransporte: Transporte[] = [];
  arrTiendas: Envios[] = [];
  // Elementos del Form
  cargamentoForm: FormGroup;
  metodoTransp = ['FastShip por tren', 'Fastship - 12 horas', 'Fastship - 24 horas','Fastship - 48 horas'];

  // Suscripcipción
  private firebaseSubscription: Subscription;
  private firestoreTransportesSubscription: Subscription;
  private firestoretiendaSubscription: Subscription;


  constructor(public authService: AuthService, public _data: FirestoreCargamentoEnvioService,
     public _misTransporte: FirestoreTransportesEnvioService, public _mistiendas: FirestoreEnviosService,
       private fb: FormBuilder) {
  }

  ngOnInit() {
      // Obtenemos los métodos envío registrados en la base de datos.
      this.firebaseSubscription = this._data.getCargamento().subscribe(
      (cargamento: Cargamento[]) => {
         this.arr = cargamento;
           console.log(this.arr);
       }
      );
      // Obtenemos los Transportes
      this.firestoreTransportesSubscription = this._misTransporte.getTransporte().subscribe(
        (transporte: Transporte[]) => {
        this.arrTransporte = transporte;
          }
        );
      this.firestoretiendaSubscription = this._mistiendas.getEnvios().subscribe(
        (tiendas: Envios[]) => {
        this.arrTiendas = tiendas;
        console.log(this.arrTiendas);
         }
      );

    // Inicialización de los elementos de Materialize que requieren Jquery.
    $(function() {
    $('.collapsible').collapsible();
      $('select').formSelect();
      $('.modal').modal();
      $('.datepicker').datepicker({
          container: 'body'
        });
    });

    this.createForm();
  }

  // Finalizamos la suscripción con el servicio al cerrar el componente.
  ngOnDestroy() {
    this.firebaseSubscription.unsubscribe();
    this.firestoreTransportesSubscription.unsubscribe();
    this.firestoretiendaSubscription.unsubscribe();
  }

  ngOnChanges() {
    this.cleanForm();
  }

  createForm() {
    this.cargamentoForm = this.fb.group({
      fechaCarga: ['', Validators.required],
      tipoEnvio: ['', Validators.required],
       idTransp: ['', Validators.required],
      numTracking: ['', Validators.required],
      tipoPaquete: ['', Validators.required],
      estado: ['', Validators.required],

    });
  }


  insertSubmit() {
    console.log('Insertando...');
    this._data.addCargamento(this.cargamentoForm.value);
  }

  cleanForm() {
    this.cargamentoForm.reset();
  }
}
