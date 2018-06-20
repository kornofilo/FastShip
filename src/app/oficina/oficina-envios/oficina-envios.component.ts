import { Component, OnInit, OnDestroy } from '@angular/core';
declare let $: any;
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MetodosEnvio } from '../../classes/metodos-envio';
import { Envios } from '../../classes/envios';
import { Subscription } from 'rxjs';

// Firebase
import { AuthService } from '../../services/auth.service';

// Servicios
import { FirestoreMetodosEnvioService } from '../../services/firestore-metodos-envio.service';
import { FirestoreEnviosService } from '../../services/firestore-envios.service';

@Component({
  selector: 'app-oficina-envios',
  templateUrl: './oficina-envios.component.html',
  styleUrls: ['./oficina-envios.component.css']
})
export class OficinaEnviosComponent implements OnInit, OnDestroy {
  arr: Envios[] = [];
  idEnvio: string;

  // Elementos de los form
  paquetesForm: FormGroup;
  arrMetodosEnvio: MetodosEnvio[] = [];

  // Suscripciones
  private firestoreEnviosSubscription: Subscription;
  private firestoreMetodosEnvioSubscription: Subscription;

  constructor(public authService: AuthService, public _data: FirestoreEnviosService,
    public _misMetodosDeEnvio: FirestoreMetodosEnvioService, private fb: FormBuilder) {}


  ngOnInit() {
    this.firestoreEnviosSubscription = this._data.getEnvios().subscribe(
      (oficina: Envios[]) => {
      this.arr = oficina;
      console.log(this.arr);
     }
    );

    this.firestoreMetodosEnvioSubscription = this._misMetodosDeEnvio.getMetodosEnvio().subscribe(
      (metodosEnvio: MetodosEnvio[]) => {
        this.arrMetodosEnvio = metodosEnvio;
      }
    );

    // Inicialización de elementos de Materialize.
    $('select').formSelect();
    $('.modal').modal();
    $('.datepicker').datepicker({
        container: 'body'
      });
    $('input#input_text, textarea#textarea2').characterCounter();

  }

  ngOnDestroy() {
    this.firestoreEnviosSubscription.unsubscribe();
    this.firestoreMetodosEnvioSubscription.unsubscribe();
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

    });
  }

}
