import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Envios } from '../../classes/envios';
declare let $: any;
import { Subscription } from 'rxjs';

// Servicios
import { FirestoreEnviosService } from '../../services/firestore-envios.service';


@Component({
  selector: 'app-oficina-envios-estados',
  templateUrl: './oficina-envios-estados.component.html',
  styleUrls: ['./oficina-envios-estados.component.css']
})
export class OficinaEnviosEstadosComponent implements OnInit, OnDestroy, OnChanges {
  arr: Envios[] = [];

  // Inicialización de las variables de los elementos de los form.
  newEstadoForm: FormGroup;

  // Inicialización de las Suscripciones.
  private firestoreEnviosSubscription: Subscription;

constructor( public _misEnvios: FirestoreEnviosService, private fb: FormBuilder) {}
  ngOnInit() {
    this.firestoreEnviosSubscription = this._misEnvios.getEnvios().subscribe(
      (envio: Envios[]) => {
      this.arr = envio;
      console.log(this.arr);
     }

    );
    $(function() {
      $('select').formSelect();
      $('.modal').modal();
    });

  }

  ngOnDestroy() {
    this.firestoreEnviosSubscription.unsubscribe();
  }

  ngOnChanges() {
  }

  createForm() {
    this.newEstadoForm = this.fb.group({
      estado: ['Estado', Validators.required];
      newEstado: ({
        estado: '',
        fecha: '',
        tienda: ''
      })
    });
  }


}
