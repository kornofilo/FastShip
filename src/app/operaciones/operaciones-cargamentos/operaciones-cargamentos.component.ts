import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { MetodosEnvio, TiposMetodosEnvio } from '../../classes/metodos-envio';
declare let $: any;
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Cargamento } from '../../classes/cargamento';

// Firebase
import { AuthService } from '../../services/auth.service';
import {  FirestoreCargamentoEnvioService} from '../../services/firestore-cargamento-envio.service';

@Component({
  selector: 'app-operaciones-cargamentos',
  templateUrl: './operaciones-cargamentos.component.html',
  styleUrls: ['./operaciones-cargamentos.component.css']
})
export class OperacionesCargamentosComponent implements  OnInit, OnDestroy, OnChanges {
  arr: Cargamento[] = [];
  updClicked = false;
  iME: string;
  newMetodoCargamento: Cargamento;
  // Elementos del Form
  form: FormGroup;
  cargamentoForm: FormGroup;


  // Suscripcipción
  private firebaseSubscription: Subscription;

  constructor(public authService: AuthService, public _data: FirestoreCargamentoEnvioService, private fb: FormBuilder) {
  }

  ngOnInit() {
      // Obtenemos los métodos envío registrados en la base de datos.
      this.firebaseSubscription = this._data.getCargamento().subscribe(
        (cargamento: Cargamento[]) => {
         this.arr = cargamento;
       }
      );

    // Inicialización de los elementos de Materialize que requieren Jquery.
    $(function() {
      $('.collapsible').collapsible();
      $('select').formSelect();
      $('.dropdown-trigger').dropdown();
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
  }
  ngOnChanges() {
    //this.cleanForm();
  }
  createForm() {
    this.cargamentoForm = this.fb.group({
      tipos: ['', Validators.required],

    });
  }

}
