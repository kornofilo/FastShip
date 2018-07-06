import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import {Rutas} from '../../classes/rutas';
import {Subruta} from '../../classes/subruta';
import { Oficina } from '../../classes/oficina';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare let $: any;
import { Subscription } from 'rxjs';

//Firebase
import { AuthService } from '../../services/auth.service';
import { FirestoreRutasService } from '../../services/firestore-rutas.service';
import { FirestoreSubrutasService } from '../../services/firestore-subrutas.service';
import { FirestoreOficinaService } from '../../services/firestore-oficina.service';

//Services

@Component({
  selector: 'app-operaciones-rutas',
  templateUrl: './operaciones-rutas.component.html',
  styleUrls: ['./operaciones-rutas.component.css']
})
export class OperacionesRutasComponent implements OnInit {
  arr: Rutas[]=[];
  arrSubruta: Subruta[]=[];
  arrOficinas: Oficina[] = [];
  updClicked = false;
  iME: string;
  // Elementos del Form
  Rutaform: FormGroup;
   // Suscripcipción
  firebaseSubscription: Subscription;
  firestoreSubrutaSubscription: Subscription;
  firestoreOficinasEnvioSubscription: Subscription; 

  constructor(public authService: AuthService, public _data: FirestoreRutasService,public _subruta: FirestoreSubrutasService, public _misTiendas: FirestoreOficinaService,private fb: FormBuilder) { }

  ngOnInit() {
    this.firebaseSubscription=this._data.getRutas().subscribe((Ruta:Rutas[])=>{
      this.arr=Ruta;
      console.log(this.arr)
    }
  );

    this.firestoreSubrutaSubscription=this._subruta.getSubRutas().subscribe((subruta:Subruta[])=>{
      this.arrSubruta= subruta;
      console.log(this.arrSubruta);
    }
  );

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
    

    this.Rutaform = this.fb.group({
      rutapadre: ['', Validators.required],
      Opcion1:  ['', Validators.required],
      Opcion2:  ['', Validators],
      Opcion3:  ['', Validators],
      Opcion4:  ['', Validators],
      tiendaOrigen: ['', Validators.required],
      tiendaDestino: ['', Validators.required],
    });
  }

  insertSubmit() {
    console.log('Insertando...');
    this._data.addRutas(this.Rutaform.value);
  }

  onUpdate(Ruta) {
    this.iME = Ruta.id;
    this.updClicked = true;
    this.Rutaform.patchValue({
      tiendaOrigen: Ruta.tiendaOrigen,
      tiendaDestino: Ruta.tiendaDestino,
    });
  }

  updateSubmit() {
    this._data.updateRuta(this.iME, this.Rutaform.value);
    this.cleanForm();
  }

  cleanForm() {
    this.Rutaform.reset();
  }

}
