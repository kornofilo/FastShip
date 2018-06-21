import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import {Subruta} from '../../classes/subruta';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare let $: any;
import { Subscription } from 'rxjs';

//Firebase
import { AuthService } from '../../services/auth.service';
import { FirestoreSubrutasService } from '../../services/firestore-subrutas.service';

//Services


@Component({
  selector: 'app-operaciones-sub-rutas',
  templateUrl: './operaciones-sub-rutas.component.html',
  styleUrls: ['./operaciones-sub-rutas.component.css']
})
export class OperacionesSubRutasComponent implements OnInit {
  arr: Subruta[] = [];
  // Elementos del Form
  subRutaform: FormGroup;
  
  // Suscripcipción
  private firebaseSubscription: Subscription;

  constructor(public authService: AuthService, public _data: FirestoreSubrutasService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.firebaseSubscription=this._data.getSubRutas().subscribe((Subruta:Subruta[])=>{
      this.arr=Subruta;
    }
  );

  $(function() {
    $('.modal').modal();
    $('select').formSelect();
  });
  }

}
