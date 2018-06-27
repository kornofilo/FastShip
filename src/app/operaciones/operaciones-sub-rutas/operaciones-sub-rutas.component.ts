import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import {Subruta} from '../../classes/subruta';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare let $: any;
import { Subscription } from 'rxjs';

//Firebase
import { AuthService } from '../../services/auth.service';
import { FirestoreSubrutasService } from '../../services/firestore-subrutas.service';
import { FirestoreEnviosService } from '../../services/firestore-envios.service';
import { FirestoreOficinaService } from '../../services/firestore-oficina.service';
import { Oficina } from '../../classes/oficina';

//Services


@Component({
  selector: 'app-operaciones-sub-rutas',
  templateUrl: './operaciones-sub-rutas.component.html',
  styleUrls: ['./operaciones-sub-rutas.component.css']
})
export class OperacionesSubRutasComponent implements OnInit {
  arr: Subruta[] = [];
  arrOficinas: Oficina[] = [];
  // Elementos del Form
  subRutaform: FormGroup;
  tipoRuta = ['Aereo', 'Terreste', 'Maritimo'];
  // Suscripcipción
  private firebaseSubscription: Subscription;
  private firestoreOficinasEnvioSubscription: Subscription;

  constructor(public authService: AuthService, public _data: FirestoreSubrutasService, private fb: FormBuilder, public _misTiendas: FirestoreOficinaService) {
    
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


  $(function() {
    $('.modal').modal();
    $('select').formSelect();
  });

  this.createForm();
  }

  createForm() {
    this.subRutaform = this.fb.group({
      nombreRuta: ['', Validators.required],
      tiendaOrigen: ['', Validators.required],
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

}
