import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare let $: any;
import { Subscription } from 'rxjs';
import { Cargamento } from '../../classes/cargamento';
import { Transporte } from '../../classes/transporte';
import { Envios } from '../../classes/envios';
import { MetodosEnvio } from '../../classes/metodos-envio';
// Firebase
import { AuthService } from '../../services/auth.service';
import {  FirestoreCargamentoEnvioService} from '../../services/firestore-cargamento-envio.service';
import { FirestoreTransportesEnvioService} from '../../services/firestore-transportes-envio.service';
import { FirestoreEnviosService } from '../../services/firestore-envios.service';
import { FirestoreMetodosEnvioService } from '../../services/firestore-metodos-envio.service';
@Component({
  selector: 'app-operaciones-cargamentos',
  templateUrl: './operaciones-cargamentos.component.html',
  styleUrls: ['./operaciones-cargamentos.component.css']
})
export class OperacionesCargamentosComponent implements  OnInit, OnDestroy,OnChanges {
  arr: Cargamento[] = [];
  arrTransporte: Transporte[] = [];
  arrTipo: Transporte[] = [];

  // Elementos del Form
  cargamentoForm: FormGroup;
  metodoTransp = ['FastShip por tren', 'Fastship - 12 horas', 'Fastship - 24 horas','Fastship - 48 horas'];

  // Suscripcipción
  private firebaseSubscription: Subscription;
  private firestoreTransportesSubscription: Subscription;
  private firestoretipoTransportesSubscription: Subscription;


  constructor(public authService: AuthService, public _data: FirestoreCargamentoEnvioService,
     public _misTransporte: FirestoreTransportesEnvioService, public _mistipoTransporte: FirestoreTransportesEnvioService,

    private fb: FormBuilder) {
  }

  ngOnInit() {
      // Obtenemos los métodos envío registrados en la base de datos.
      this.firebaseSubscription = this._data.getCargamento().subscribe(
      (cargamento: Cargamento[]) => {
         this.arr = cargamento;
           console.log(this.arr)
       }
      );
      // Obtenemos los Transportes
      this.firestoreTransportesSubscription = this._misTransporte.getTransporte().subscribe(
        (transporte: Transporte[]) => {
        this.arrTipo = transporte;
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
  /////////////////////////
  selTransporte(idplaca){
    this.firestoretipoTransportesSubscription = this._mistipoTransporte.getTransporteType(idplaca).subscribe(
      (transporte: Transporte[]) => {
      this.arrTipo = transporte;
     }
    );
  }
  ///////////////////////
  // Finalizamos la suscripción con el servicio al cerrar el componente.
  ngOnDestroy() {
    this.firebaseSubscription.unsubscribe();
    this.firestoreTransportesSubscription.unsubscribe();

  }

  ngOnChanges() {
    this.cleanForm();
  }

  createForm() {
    this.cargamentoForm = this.fb.group({
      fechaCarga: ['', Validators.required],
      tipoEnvio: ['', Validators.required],
       idTransp: ['Transporte', Validators.required],
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
