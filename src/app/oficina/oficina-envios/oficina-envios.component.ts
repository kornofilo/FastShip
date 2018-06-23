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
import { CalculoPesoService } from '../../services/calculo-peso.service';


@Component({
  selector: 'app-oficina-envios',
  templateUrl: './oficina-envios.component.html',
  styleUrls: ['./oficina-envios.component.css']
})
export class OficinaEnviosComponent implements OnInit, OnDestroy, OnChanges {
  arr: Envios[] = [];
  newEnvio: Envios;
  arrMetodosEnvio: MetodosEnvio[] = [];
  arrOficinas: Oficina[] = [];
  idEnvio: string;

  // Inicialización de las variables de los elementos de los form.
  paquetesForm: FormGroup;
  documentosForm: FormGroup;
  opcionesME = [];

  // Inicialización de las Suscripciones.
  private firestoreEnviosSubscription: Subscription;
  private firestoreMetodosEnvioSubscription: Subscription;
  private firestoreOficinasEnvioSubscription: Subscription;

  constructor(public authService: AuthService, public _misEnvios: FirestoreEnviosService,
    public _misMetodosDeEnvio: FirestoreMetodosEnvioService, public _misTiendas: FirestoreOficinaService,
    public pesaje: CalculoPesoService, private fb: FormBuilder) {}


  ngOnInit() {
    this.firestoreEnviosSubscription = this._misEnvios.getEnvios().subscribe(
      (envio: Envios[]) => {
      this.arr = envio;
      console.log(this.arr);
     }

    );

    // Obtenemos los métodos de envío registrados en la base de datos.
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
    this.cleanForms();
  }

  // Función que inicializa los modelos de los formularios para creación de envíos.
  createForms() {
    // Fomulario de creación de envío de paquetes.
    this.paquetesForm = this.fb.group({
      estado: 'Recibido',
      tipo: 'Paquete',
      historial: ({
        estado: 'Recibido',
        fecha: '',
        tienda: ''
      }),
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
        pesoFacturable: 0,
        descripcion: ['', Validators.required],
        perecedero: false
      })

    });

    // Fomulario de creación de envío de documentos.
    this.documentosForm = this.fb.group({
      estado: 'Recibido',
      tipo: 'Documentos',
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
        descripcion: ['', Validators.required],
      })
    });
  } // Fin de clase 'createForms'.

  // Función que limpia los modelos de los formularios para creación de envíos.
  cleanForms() {
    // Fomulario de creación de envío de paquetes.
    this.paquetesForm.reset({
      estado: 'Recibido',
      tipo: 'Paquetes',
      remitente: ({
        nombre: '',
        apellido: '',
        telefono: ''
      }),

      destinatario: ({
        nombre: '',
        apellido: '',
        telefono: '',
        direccion: ''
      }),

      detalles: ({
        origen: 'Origen',
        destino: 'Destino',
        fechaEnvio: '',
        tipoEnvio: 'Tipo de Envío'
      }),

      especificaciones: ({
        largo: '',
        ancho: '',
        alto: '',
        peso: '',
        descripcion: '',
        perecedero: false
      }),
    });

    // Fomulario de creación de envío de documentos.
    this.documentosForm.reset({
      estado: 'Recibido',
      tipo: 'Documentos',
      remitente: ({
        nombre: '',
        apellido: '',
        telefono: ''
      }),

      destinatario: ({
        nombre: '',
        apellido: '',
        telefono: '',
        direccion: ''
      }),

      detalles: ({
        origen: 'Origen',
        destino: 'Destino',
        fechaEnvio: '',
        tipoEnvio: 'Tipo de Envío'
      }),

      especificaciones: ({
        descripcion: ''
      })
    });
  }

  // Función que envía el modelo de creación de envíos de paquetes al service para lo ingrese en la BD.
  insertSubmit() {
    console.log('Insertando...');
    const pesoFacturableValue = +this.getPesoFacturable();
    this.paquetesForm.patchValue({
      historial: ({
        1: ({
          tienda: this.paquetesForm.get('detalles.origen').value,
          fecha: Date.now(),
          estado: 'Recibido'
        })
      }),
      especificaciones: {
        pesoFacturable: pesoFacturableValue
      }
    });

    this._misEnvios.addEnvio(this.paquetesForm.value);
    this.cleanForms();
  }

  // Función que envía el modelo de creación de envíos de documentos al service para lo ingrese en la BD.
  insertSubmitDocumentos() {
    console.log('Insertando...');
    this.documentosForm.patchValue({
      historial: ({
        1: ({
          tienda: this.documentosForm.get('detalles.origen').value,
          fecha: Date.now(),
          estado: 'Recibido'
        })
      })
    });


    this._misEnvios.addEnvio(this.documentosForm.value);
    this.cleanForms();
  }

  // Función para determinar el peso facturable.
  getPesoFacturable() {
    const pesoDimensional = this.pesaje.getPesoDimensional((this.paquetesForm.get('especificaciones.largo').value *
                                                    this.paquetesForm.get('especificaciones.ancho').value *
                                                    this.paquetesForm.get('especificaciones.alto').value));

    const pesoReal =  this.paquetesForm.get('especificaciones.peso').value;
    if (pesoDimensional > pesoReal) {
      return pesoDimensional;
    } else {
      return pesoReal;
    }
  }

}
