import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { MetodosEnvio, TiposMetodosEnvio } from '../../classes/metodos-envio';
declare let $: any;
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

// Firebase
import { AuthService } from '../../services/auth.service';
import { FirestoreMetodosEnvioService } from '../../services/firestore-metodos-envio.service';

@Component({
  selector: 'app-operaciones-cargamentos',
  templateUrl: './operaciones-cargamentos.component.html',
  styleUrls: ['./operaciones-cargamentos.component.css']
})
export class OperacionesCargamentosComponent implements  OnInit, OnDestroy, OnChanges {
  arr: MetodosEnvio[] = [];
  updClicked = false;
  iME: string;
  newMetodoEnvio: MetodosEnvio;
  // Elementos del Form
  form: FormGroup;
  metodosEnvioForm: FormGroup;
  opcionesTipos = ['Aire', 'Mar', 'Tierra'];

  // Suscripcipción
  private firebaseSubscription: Subscription;

  constructor(public authService: AuthService, public _data: FirestoreMetodosEnvioService, private fb: FormBuilder) {
  }

  ngOnInit() {
      // Obtenemos los métodos envío registrados en la base de datos.
      this.firebaseSubscription = this._data.getMetodosEnvio().subscribe(
        (metodoEnvio: MetodosEnvio[]) => {
         this.arr = metodoEnvio;
       }
      );

    // Inicialización de los elementos de Materialize que requieren Jquery.
    $(function() {
      $('.collapsible').collapsible();
      $('select').formSelect();
      $('.dropdown-trigger').dropdown();
      $('.modal').modal();
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
    this.metodosEnvioForm = this.fb.group({
      tipos: ['', Validators.required],

    });
  }

}
