import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MetodosEnvio } from '../../classes/metodos-envio';
import { Envios } from '../../classes/envios';
import { Oficina } from '../../classes/oficina';
declare let $: any;
import { Subscription } from 'rxjs';

// Firebase
import { AuthService } from '../../services/auth.service';

// Servicios
import { FirestoreMetodosEnvioService } from '../../services/firestore-metodos-envio.service';
import { FirestoreEnviosService } from '../../services/firestore-envios.service';
import { FirestoreOficinaService } from '../../services/firestore-oficina.service';


@Component({
  selector: 'app-oficina-envios',
  templateUrl: './oficina-envios.component.html',
  styleUrls: ['./oficina-envios.component.css']
})
export class OficinaEnviosComponent implements OnInit, OnDestroy, OnChanges {
  arr: Envios[] = [];
  arrMetodosEnvio: MetodosEnvio[] = [];
  arrOficinas: Oficina[] = [];
  idEnvio: string;

  // Elementos de los form
  paquetesForm: FormGroup;
  opcionesME = [];


  // Suscripciones
  private firestoreEnviosSubscription: Subscription;
  private firestoreMetodosEnvioSubscription: Subscription;
  private firestoreOficinasEnvioSubscription: Subscription;

  constructor(public authService: AuthService, public _misEnvios: FirestoreEnviosService,
    public _misMetodosDeEnvio: FirestoreMetodosEnvioService, public _misTiendas: FirestoreOficinaService, private fb: FormBuilder) {}


  ngOnInit() {
    this.firestoreEnviosSubscription = this._misEnvios.getEnvios().subscribe(
      (oficina: Envios[]) => {
      this.arr = oficina;
      console.log(this.arr);
     }

    );

    this.firestoreMetodosEnvioSubscription = this._misMetodosDeEnvio.getMetodosEnvio().subscribe(
      (metodoEnvio: MetodosEnvio[]) => {
        this.arrMetodosEnvio = metodoEnvio;
      }
     );

    // Obtenemos las oficinas registradas en la base de datos.
    this.firestoreOficinasEnvioSubscription = this._misTiendas.getOficinasNRT().subscribe(
      (oficina: Oficina[]) => {
      this.arrOficinas = oficina;
     }
    );

    // Inicialización de elementos de Materialize.

    $(function() {
      $('.collapsible').collapsible();
      $('select').formSelect();
      $('.modal').modal();
      $('input#input_text, textarea#textarea2').characterCounter();
       });
      $('.datepicker').datepicker({
        container: 'body'
      });

      this.createForms();
  }

  ngOnDestroy() {
    this.firestoreEnviosSubscription.unsubscribe();
    this.firestoreMetodosEnvioSubscription.unsubscribe();
    this.firestoreOficinasEnvioSubscription.unsubscribe();
  }

  ngOnChanges() {
  }

  createForms() {
    // Creación de formulario para inserción y actualización de envío de paquetes.
    this.paquetesForm = this.fb.group({
      remitente: this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        telefono: ['', Validators.required]
      }),

      destinatario: this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        telefono: ['', Validators.required],
        direccion: ['', Validators.required]
      }),

      detalles: this.fb.group({
        origen: ['Origen', Validators.required],
        destino: ['Destino', Validators.required],
        fechaEnvio: ['', Validators.required],
        tipoEnvio: ['Tipo de Envío', Validators.required]
      }),

      especificaciones: this.fb.group({
        largo: ['', Validators.required],
        ancho: ['', Validators.required],
        alto: ['', Validators.required],
        peso: ['', Validators.required],
        descripcion: ['', Validators.required],
        perecedero: false
      }),

    });
  }

  // Función que envía el modelo a la función de insertar método de envío en el service.
  insertSubmit() {
    console.log('Insertando...');
    this._misEnvios.addEnvio(this.paquetesForm.value);
  }

}
