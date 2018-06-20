import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { MetodosEnvio } from '../../classes/metodos-envio';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare let $: any;
import { Subscription } from 'rxjs';

// Firebase
import { AuthService } from '../../services/auth.service';

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
  newMetodoEnvio: MetodosEnvio;
  // Elementos del Form
  form: FormGroup;
  metodosEnvioForm: FormGroup;
  opcionesTiempo = ['12 horas', '24 horas', '48 horas'];

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
    this.cleanForm();
  }

  // Función que envía el modelo a la función de insertar método de envío en el service.
  insertSubmit() {
    console.log('Insertando...');
    this._data.addMetodosEnvio(this.metodosEnvioForm.value);
    this.newMetodoEnvio = new MetodosEnvio;
  }

  createForm() {
    this.metodosEnvioForm = this.fb.group({
      nombre: ['', Validators.required],
      tiempo: ['', Validators.required],
      tipos: this.fb.group({
        tierra: [false, Validators.required],
        mar: [false, Validators.required],
        aire: [false, Validators.required]
      })
    });
  }

  onDelete(metodoEnvio) {
    if (confirm('¿Está seguro que desea borrar este método de envío?')) {
      this._data.deleteMetodosEnvio(metodoEnvio);
    }
  }

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

  updateSubmit() {
    this._data.updateMetodosEnvio(this.iME, this.metodosEnvioForm.value);
    this.cleanForm();
  }

  cleanForm() {
    this.metodosEnvioForm.reset({
      nombre: '',
      tiempo: 'Horas',
      tipos: ({
        tierra: false,
        mar: false,
        aire: false
      })
    });
  }

}
