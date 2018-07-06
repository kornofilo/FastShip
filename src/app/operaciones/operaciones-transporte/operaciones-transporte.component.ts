import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Envios } from '../../classes/envios';
import { Transporte } from '../../classes/transporte';
declare let $: any;
// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { Form,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FirestoreEnviosService } from '../../services/firestore-envios.service';
import { FirestoreTransportesEnvioService} from '../../services/firestore-transportes-envio.service';
@Component({
  selector: 'app-operaciones-transporte',
  templateUrl: './operaciones-transporte.component.html',
  styleUrls: ['./operaciones-transporte.component.css']
})
export class OperacionesTransporteComponent implements OnInit, OnDestroy{
arr: Envios[] = [];
arrTransporte:Transporte[] = [];
  origen: string;
  iE: string;
  // Inicialización de las variables de los elementos de los form.
  newEstadoForm: FormGroup;

private firebaseSubscription: Subscription;
  private firestoreTransportesSubscription: Subscription;

  constructor(public authService: AuthService, public _data:  FirestoreEnviosService , public route: ActivatedRoute,private fb: FormBuilder) {}

  ngOnInit() {
    this.origen = this.route.snapshot.params['origen'];
    console.log(this.origen);
    // Obtenemos las guias registradas en la base de datos.
    this.firebaseSubscription = this._data.getTiendasType(this.origen).subscribe(
      (envio: Envios[]) => {
      this.arr = envio;
      console.log(this.arr);
     }
    );

    // Inicialización de los elementos de Materialize que requieren JQuery para su funcionamiento.
    $(function() {
      $('select').formSelect();
        $('.modal').modal();
        });

  }
  // Finalizamos la suscripción con el servicio al cerrar el componente.
  ngOnDestroy() {
    this.firebaseSubscription.unsubscribe();

  }
}
