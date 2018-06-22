import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import {Rutas} from '../../classes/rutas';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare let $: any;
import { Subscription } from 'rxjs';

//Firebase
import { AuthService } from '../../services/auth.service';
import { FirestoreRutasService } from '../../services/firestore-rutas.service';

//Services

@Component({
  selector: 'app-operaciones-rutas',
  templateUrl: './operaciones-rutas.component.html',
  styleUrls: ['./operaciones-rutas.component.css']
})
export class OperacionesRutasComponent implements OnInit {
  arr: Rutas[]=[];
  // Elementos del Form
  Rutaform: FormGroup;
   // Suscripcipción
   private firebaseSubscription: Subscription;

  constructor(public authService: AuthService, public _data: FirestoreRutasService, private fb: FormBuilder) { }

  ngOnInit() {
    this.firebaseSubscription=this._data.getRutas().subscribe((Ruta:Rutas[])=>{
      this.arr=Ruta;
      console.log(this.arr)
    }
  );

  $(function() {
    $('.modal').modal();
    $('select').formSelect();
  });

  this.createForm();
  }

  createForm() {
    this.Rutaform = this.fb.group({
      tiendaOrigen: ['', Validators.required],
      tiendaDestino: ['', Validators.required],
    });
  }

  insertSubmit() {
    console.log('Insertando...');
    this._data.addRutas(this.Rutaform.value);
  }

}
