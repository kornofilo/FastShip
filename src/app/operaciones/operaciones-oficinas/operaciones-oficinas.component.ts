import { Component, OnInit } from '@angular/core';
import { Oficina } from '../../classes/oficina';
declare let $: any;

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { FirestoreOficinaService } from '../../services/firestore-oficina.service';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-operaciones-oficinas',
  templateUrl: './operaciones-oficinas.component.html',
  styleUrls: ['./operaciones-oficinas.component.css']
})
export class OperacionesOficinasComponent implements OnInit {
  formAddOficina: Form;
  arr: Oficina[] = [];
  updClicked = false;
  newOficina: Oficina;
  idOficina: string;
  // Modelo con la estructura de la clase oficina que obtiene los datos ingresados en el form.
  model = { nombre: '', tipo: '', direccion: '', posGeografica: {lat: 0, long: 0},
  horario: {diasLaborables: '', horaApertura: '', horaCierre: ''}, disponibilidad: {envia: false, recibe: false}};

  constructor(public authService: AuthService, public _data: FirestoreOficinaService) {}

  ngOnInit() {
    // Obtenemos las oficinas registradas en la base de datos.
    this._data.getOficinas().subscribe(
      (oficina: Oficina[]) => {
      this.arr = oficina;
      console.log(this.arr);
     }
    );

    // Inicialización de los elementos de Materialize que requieren JQuery para su funcionamiento.
    $(function() {
      $('select').formSelect();
      $('.timepicker').timepicker({
        twelveHour:	false,
        container: 'body'
      });
    });
  }

  // Función que envía el modelo a la función de insertar oficina en el service.
  insertSubmit() {
    console.log(this.model);
    this._data.addOficina(this.model);
    this.cleanForm();
  }

  // Función que desactiva el botón de submit de crear y activa el de actualizar.
  onUpdate(metodoEnvio) {
    this.updClicked = true;
  }

  // Función que limpia los elementos del modelo.
  cleanForm() {
    this.model.direccion = '';
    this.model.disponibilidad.envia = false;
    this.model.disponibilidad.recibe = false;
    this.model.horario.diasLaborables = '';
    this.model.horario.horaApertura  = '';
    this.model.horario.horaCierre  = '';
    this.model.posGeografica = {lat: 0, long: 0};
    this.model.nombre = '';
    this.model.tipo  = '';
    this.updClicked = false;
  }

  onDelete(metodoEnvio) {
    if (confirm('¿Está seguro que desea borrar esta oficina?')) {
      this._data.deleteOficina(metodoEnvio);
    }
  }


}
