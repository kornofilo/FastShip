import { Component, OnInit } from '@angular/core';
import { Oficina } from '../../classes/oficina';
declare let $: any;

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { FirestoreOficinaService } from '../../services/firestore-oficina.service';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';


@Component({
  selector: 'app-operaciones-oficinas',
  templateUrl: './operaciones-oficinas.component.html',
  styleUrls: ['./operaciones-oficinas.component.css']
})
export class OperacionesOficinasComponent implements OnInit {
  arr: Oficina[] = [];
  updClicked = false;
  idOficina: string;
  // Elementos del Form
  model = { nombre: '', tipo: '', direccion: '', latitud: 0, longitud: 0,
  diasLaborables: '', horaApertura: '', horaCierre: '', envia: false, recibe: false};

  constructor(public authService: AuthService, public _data: FirestoreOficinaService) {}

  ngOnInit() {
    this._data.getOficinas().subscribe(
      (oficina: Oficina[]) => {
      this.arr = oficina;
      console.log(this.arr);
     }
    );

    $(function() {
      $('select').formSelect();
      $('.timepicker').timepicker({
        container: 'body'
      });
    });
  }

  insertSubmit() {
    console.log(this.model);
    this.cleanForm();
  }

  onUpdate(metodoEnvio) {
    this.updClicked = true;
  }

  cleanForm() {
    this.updClicked = false;
  }


}
