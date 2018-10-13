import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import {Subruta} from '../../classes/subruta';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare let $: any;
import { Subscription } from 'rxjs';

//Firebase
import { AuthService } from '../../services/auth.service';
import { FirestoreSubrutasService } from '../../services/firestore-subrutas.service';

import { FirestoreOficinaService } from '../../services/firestore-oficina.service';
import { FirestoreRutasService } from '../../services/firestore-rutas.service';


//importamos la clase oficina para tener acceso a las oficinas regisradas
import { Oficina } from '../../classes/oficina';
import{Rutas}from '../../classes/rutas';
//Services


@Component({
  selector: 'app-operaciones-sub-rutas',
  templateUrl: './operaciones-sub-rutas.component.html',
  styleUrls: ['./operaciones-sub-rutas.component.css']
})
export class OperacionesSubRutasComponent implements OnInit {
  arr: Subruta[] = [];
 
  Ruta:Rutas[]=[];
  arrOficinas: Oficina[] = [];
  // Elementos del Form
  subRutaform: FormGroup;
  tipoRuta = ['Aereo', 'Terreste', 'Maritimo'];
  // Suscripcipción
  firebaseSubscription: Subscription;
  firestoreRutasSubscription:Subscription;

  //subcripcion de oficinas envios 
  firestoreOficinasEnvioSubscription: Subscription;
//agregamos mis tiendas al constructor
  constructor(public authService: AuthService, public _data: FirestoreSubrutasService,public _Rutas:FirestoreRutasService, private fb: FormBuilder, public _misTiendas: FirestoreOficinaService) {
    
  }

  ngOnInit() {
    this.firebaseSubscription=this._data.getSubRutas().subscribe((Subruta:Subruta[])=>{
      this.arr=Subruta;
      
      console.log(this.arr)
    }
  );
  
  

  //get oficina
  this.firestoreOficinasEnvioSubscription = this._misTiendas.getOficinasNRT().subscribe(
    (oficina: Oficina[]) => {
    this.arrOficinas = oficina;
   }
  );
  // get rutas
  this.firestoreOficinasEnvioSubscription = this._Rutas.getRutas().subscribe(
    (rutas: Rutas[]) => {
    this.Ruta = rutas;
   }
  );

  $(function() {
    $('.modal').modal();
    $('select').formSelect();
  });

  this.createForm();
  }

  ngOnChanges() {
    this.cleanForm();
  }

  createForm() {
    this.subRutaform = this.fb.group({
      nombreRuta: ['', Validators.required],
      tiendaOrigen: ['', Validators.required],
      rutapadre:['',Validators.required],
      tiendaDestino: ['', Validators.required],
      horarioSalida: ['', Validators.required],
      tiempoRecorrido: ['', Validators.required],
      
      tipoRuta: ['', Validators.required],

    });
  }

  insertSubmit() {
    console.log('Insertando...');
    this._data.addSubruta(this.subRutaform.value);
  }

  //Función que se encarga de limpiar el Formulario de Métodos de Envío.
  cleanForm() {
    this.subRutaform.reset();
  }

}
