import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Envios } from '../../classes/envios';
declare let $: any;
import { Oficina } from '../../classes/oficina';
import { Subscription } from 'rxjs';

// Servicios
import { FirestoreEnviosService } from '../../services/firestore-envios.service';
import { FirestoreOficinaService } from '../../services/firestore-oficina.service';


@Component({
  selector: 'app-oficina-envios-estados',
  templateUrl: './oficina-envios-estados.component.html',
  styleUrls: ['./oficina-envios-estados.component.css']
})
export class OficinaEnviosEstadosComponent implements OnInit, OnDestroy, OnChanges {
  arr: Envios[] = [];
  arrOficinas: Oficina[] = [];
  iE: string;


  opcionesEstado = ['Enviado', 'Recibido', 'Detenido', 'Retornando al Remitente', 'En camino a ser entregado', 'Entregado'];

  // Inicialización de las variables de los elementos de los form.
  newEstadoForm: FormGroup;

  // Inicialización de las Suscripciones.
  private firestoreEnviosSubscription: Subscription;
  private firestoreOficinasEnvioSubscription: Subscription;


constructor(public _misEnvios: FirestoreEnviosService, private fb: FormBuilder, public _misTiendas: FirestoreOficinaService) {}
  ngOnInit() {
    this.firestoreEnviosSubscription = this._misEnvios.getEnvios().subscribe(
      (envio: Envios[]) => {
      this.arr = envio;
      console.log(this.arr);
     }
    );

    // Obtenemos las oficinas registradas en la base de datos.
    this.firestoreOficinasEnvioSubscription = this._misTiendas.getOficinasNRT().subscribe(
      (oficina: Oficina[]) => {
      this.arrOficinas = oficina;
     }
    );

    $(function() {
      $('select').formSelect();
      $('.modal').modal();
    });

    this.createForm();

  }

  ngOnDestroy() {
    this.firestoreEnviosSubscription.unsubscribe();
    this.firestoreOficinasEnvioSubscription.unsubscribe();
  }

  ngOnChanges() {
    this.cleanForm();
  }

  createForm() {
    this.newEstadoForm = this.fb.group({
      estado: ['Estado', Validators.required],
      newEstado: this.fb.group({
        estado: '',
        fecha: '',
        tienda: 'Tienda'
      })
    });
  }

  /* Función que limpia el modelo del formulario para la actualización
   de los estados de los envíos. */
  cleanForm() {
    this.newEstadoForm.reset({
      estado: 'Estado',
      newEstado: {
        estado: '',
        fecha: '',
        tienda: 'Tienda'
      }
    });
  }

  onUpdate(envio) {
    this.iE = envio.id;
    this.newEstadoForm.patchValue({
      estado: envio.estado
    });
  }

  updateSubmit() {
    let newEH = {};

    this.newEstadoForm.patchValue({
      newEstado: {
        estado: this.newEstadoForm.get('estado').value,
        fecha: Date.now()
      }
    });
    newEH = {
      tienda: this.newEstadoForm.value.newEstado.tienda,
      fecha: this.newEstadoForm.value.newEstado.fecha,
      estado: this.newEstadoForm.get('estado').value,
    };
    this._misEnvios.updateEstadoEnvio(this.iE, newEH);
  }


}
