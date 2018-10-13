import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { MetodosEnvio } from '../../classes/metodos-envio';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare let $: any;
import { Subscription } from 'rxjs';

// Servicios
import { FirestoreMetodosEnvioService } from '../../services/firestore-metodos-envio.service';


@Component({
  selector: 'app-operaciones-metodos-envio',
  templateUrl: './operaciones-metodos-envio.component.html',
  styleUrls: ['./operaciones-metodos-envio.component.css']
})

export class OperacionesMetodosEnvioComponent implements OnInit, OnDestroy, OnChanges {
  arr: MetodosEnvio[] = [];
  updClicked = false;
  iME: string;
  // Elementos del Form
  metodosEnvioForm: FormGroup;
  opcionesTiempo = ['12 horas', '24 horas', '48 horas'];

  // Suscripcipción
  private firebaseSubscription: Subscription;

  constructor(public _data: FirestoreMetodosEnvioService, private fb: FormBuilder) {
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
    this.cleanForm();
  }

  // Función que envía el modelo a la función de insertar método de envío en el service.
  insertSubmit() {
    console.log('Insertando...');
    this._data.addMetodosEnvio(this.metodosEnvioForm.value);
  }

  createForm() {
    this.metodosEnvioForm = this.fb.group({
      nombre: ['', Validators.required],
      tiempo: ['Horas', Validators.required],
      tipos: this.fb.group({
        tierra: [false, Validators.required],
        mar: [false, Validators.required],
        aire: [false, Validators.required]
      })
    });
  }

  // Función que envía el id del Método de Envío seleccionado al service para que lo elimine de la base de datos.
  onDelete(metodoEnvio) {
    if (confirm('¿Está seguro que desea borrar este método de envío?')) {
      this._data.deleteMetodosEnvio(metodoEnvio);
    }
  }

  /* Función que constuye el objeto del método de envío seleccionado con los datos modificados por el usuario que será enviado 
  al service en la función updateSubmit.
  */
  onUpdate(metodoEnvio) {
    this.iME = metodoEnvio.id;
    this.updClicked = true;
    this.metodosEnvioForm.patchValue({
      nombre: metodoEnvio.nombre,
      tiempo: metodoEnvio.tiempo,
      tipos: ({
        tierra: metodoEnvio.tipos.tierra,
        mar: metodoEnvio.tipos.mar,
        aire: metodoEnvio.tipos.aire
      })
    });
  }

  /* Función que envía al service de métodos de envío el objeto construido en la función 'onUpdate' para que actualice 
  los campos actualizados del Método de Envío seleccionado. */
  updateSubmit() {
    this._data.updateMetodosEnvio(this.iME, this.metodosEnvioForm.value);
    this.cleanForm();
  }

  //Función que se encarga de limpiar el Formulario de Métodos de Envío.
  cleanForm() {
    this.metodosEnvioForm.reset();
  }

}//Fin de la clase 'OperacionesMetodosEnvioComponent'. 