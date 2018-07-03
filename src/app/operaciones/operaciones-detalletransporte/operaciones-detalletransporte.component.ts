import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Envios } from '../../classes/envios';

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

@Component({
  selector: 'app-operaciones-detalletransporte',
  templateUrl: './operaciones-detalletransporte.component.html',
  styleUrls: ['./operaciones-detalletransporte.component.css']
})
export class OperacionesDetalletransporteComponent implements OnInit , OnDestroy{
arr: Envios[] = [];
transporte: string;
iE: string;

private firebaseSubscription: Subscription;
constructor(public authService: AuthService, public _data:  FirestoreEnviosService , public route: ActivatedRoute,private fb: FormBuilder) {}

  ngOnInit() {
    this.transporte = this.route.snapshot.params['transporte'];
  console.log(this.transporte);
  // Obtenemos las guias registradas en la base de datos.
  this.firebaseSubscription = this._data.getDetalleType(this.transporte).subscribe(
    (envio: Envios[]) => {
    this.arr = envio;
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
  }
  // Finalizamos la suscripción con el servicio al cerrar el componente.
  ngOnDestroy() {
    this.firebaseSubscription.unsubscribe();
  }

}
