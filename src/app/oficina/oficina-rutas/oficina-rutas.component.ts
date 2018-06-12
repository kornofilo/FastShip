import { Component, OnInit, OnDestroy } from '@angular/core';
import { Oficina } from '../../classes/oficina';
declare let $: any;

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { FirestoreOficinaService } from '../../services/firestore-oficina.service';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { Form } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-oficina-rutas',
  templateUrl: './oficina-rutas.component.html',
  styleUrls: ['./oficina-rutas.component.css']
})
export class OficinaRutasComponent implements OnInit, OnDestroy {
  formAddOficina: Form;
  arr: Oficina[] = [];
  idOficina: string;
  private firebaseSubscription: Subscription;
  // Modelo con la estructura de la clase oficina que obtiene los datos ingresados en el form.
  model = { nombre: '', tipo: '', direccion: '', posGeografica: {lat: 0, long: 0},
  horario: {diasLaborables: '', horaApertura: '', horaCierre: ''}, disponibilidad: {envia: false, recibe: false}};

    constructor(public authService: AuthService, public _data: FirestoreOficinaService) {}


    ngOnInit() {
      // Obtenemos las oficinas registradas en la base de datos.
      this.firebaseSubscription = this._data.getOficinas().subscribe(
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
    // Finalizamos la suscripción con el servicio al cerrar el componente.
    ngOnDestroy() {
      this.firebaseSubscription.unsubscribe();
    }

}
