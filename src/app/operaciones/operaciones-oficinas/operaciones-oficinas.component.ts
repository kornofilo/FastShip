import { Component, OnInit, OnDestroy } from '@angular/core';
import { Oficina } from '../../classes/oficina';
declare let $: any;
import { Form } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


// Firebase
import { FirestoreOficinaService } from '../../services/firestore-oficina.service';



@Component({
  selector: 'app-operaciones-oficinas',
  templateUrl: './operaciones-oficinas.component.html',
  styleUrls: ['./operaciones-oficinas.component.css']
})
export class OperacionesOficinasComponent implements OnInit, OnDestroy {
  arr: Oficina[] = [];
  updClicked = false;
  newOficina: Oficina;
  idOficina: string;

  // Elementos del Form
  oficinasForm: FormGroup;
  opcionesTipos = ['Centro de Distribución', 'Mixta', 'Tienda'];
  opcionesDiasLaborables = ['Lunes - Viernes', 'Lunes - Sábado', 'Todos los Días'];



  // Suscripción
  private firebaseSubscription: Subscription;

  // Modelo con la estructura de la clase oficina que obtiene los datos ingresados en el form.
  model = { nombre: '', tipo: '', direccion: '', posGeografica: {lat: 0, long: 0},
  horario: {diasLaborables: '', horaApertura: '', horaCierre: ''}, disponibilidad: {envia: false, recibe: false}};

  constructor(public _data: FirestoreOficinaService, private fb: FormBuilder) {}

  ngOnInit() {
    // Obtenemos las oficinas registradas en la base de datos.
    this.firebaseSubscription = this._data.getOficinas().subscribe(
      (oficina: Oficina[]) => {
      this.arr = oficina;
      console.log(this.arr);
     }
    );

    // Inicialización de los elementos de Materialize que requieren JQuery para su funcionamiento.
    $(function() {
      $('select').formSelect();
      $('.modal').modal();
      $('.timepicker').timepicker({
        twelveHour:	false,
        container: 'body'
      });
    });

    this.createForm();
  }

  // Finalizamos la suscripción con el servicio al cerrar el componente.
  ngOnDestroy() {
    this.firebaseSubscription.unsubscribe();
  }

  createForm() {
    this.oficinasForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['Tipo', Validators.required],
      direccion: ['', Validators.required],
      posGeografica: this.fb.group({
        lat: [0, Validators.required],
        long: [0, Validators.required]
      }),
      horario: this.fb.group({
        diasLaborables: ['Días Laborables', Validators.required],
        horaApertura: ['', Validators.required],
        horaCierre: ['', Validators.required]
      }),
      disponibilidad: this.fb.group({
        envia: false,
        recibe: false
      })
    });
  }

  // Función que envía el modelo a la función de insertar oficina en el service.
  insertSubmit() {
    this._data.addOficina(this.oficinasForm.value);
    this.cleanForm();
  }

  // Función que desactiva el botón de submit de crear y activa el de actualizar.
  onUpdate(oficina) {

   this.idOficina = oficina.id;
   this.updClicked = true;
   this.oficinasForm.patchValue({
    nombre: oficina.nombre,
    tipo: oficina.tipo,
    direccion: oficina.direccion,
    posGeografica: {
        lat: oficina.posGeografica.lat,
        long: oficina.posGeografica.long
    },
      horario: {
        diasLaborables: oficina.horario.diasLaborables,
        horaApertura: oficina.horario.horaApertura,
        horaCierre: oficina.horario.horaCierre
      },
      disponibilidad: {
        envia: oficina.disponibilidad.envia,
        recibe: oficina.disponibilidad.recibe
      }
  });

  }

  // Función que limpia los elementos del modelo.
  cleanForm() {
    this.oficinasForm.reset({
      posGeografica: this.fb.group({
        lat: 0,
        long: 0
      }),
      disponibilidad: this.fb.group({
        envia: false,
        recibe: false
      })
    });
  }

  onDelete(metodoEnvio) {
    if (confirm('¿Está seguro que desea borrar esta oficina?')) {
      this._data.deleteOficina(metodoEnvio);
    }
  }

  updateSubmit() {
  this._data.updateOficina(this.idOficina, this.oficinasForm.value);
  }


}
