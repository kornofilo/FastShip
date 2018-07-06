import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subruta } from '../../classes/subruta';

declare let $: any;
// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { Form,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FirestoreSubrutasService } from '../../services/firestore-subrutas.service';


@Component({
  selector: 'app-operaciones-nombreruta',
  templateUrl: './operaciones-nombreruta.component.html',
  styleUrls: ['./operaciones-nombreruta.component.css']
})
export class OperacionesNombrerutaComponent implements OnInit , OnDestroy {

  arr: Subruta [] = [];

  nombre: string;
  tiempo = [];
  tiempos = [];
  iE: string;
  private firebaseSubscription: Subscription;

  constructor(public authService: AuthService, public _data:  FirestoreSubrutasService , public route: ActivatedRoute,private fb: FormBuilder) { }

  ngOnInit() {
    this.nombre = this.route.snapshot.params['nombre'];
  console.log(this.nombre);
  // Obtenemos las guias registradas en la base de datos.
  this.firebaseSubscription = this._data. getFiltroruta(this.nombre).subscribe(
    (subruta: Subruta[]) => {
    this.arr = subruta;
    console.log(this.arr);
    this.arr.forEach( (element, i) => {
      this.tiempo[i] += element.tiempoRecorrido;
    });
    this.tiempos = Array.from(this.tiempo);
    console.log(this.tiempos);
   }
  );
  }
  
  // Finalizamos la suscripción con el servicio al cerrar el componente.
  ngOnDestroy() {
    this.firebaseSubscription.unsubscribe();
  }
  



  


}
