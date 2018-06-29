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
export class OperacionesTransporteComponent implements OnInit, OnDestroy, OnChanges{
arr: Envios[] = [];
arrTransporte:Transporte[] = [];
  origen: string;
  iE: string;
  // Inicialización de las variables de los elementos de los form.
  newEstadoForm: FormGroup;

private firebaseSubscription: Subscription;
  private firestoreTransportesSubscription: Subscription;

  constructor(public authService: AuthService, public _data:  FirestoreEnviosService , public route: ActivatedRoute,private fb: FormBuilder,
  public _misTransporte: FirestoreTransportesEnvioService) {}

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
    // Obtenemos los Transportes
    this.firestoreTransportesSubscription = this._misTransporte.getTransporte().subscribe(
      (transporte: Transporte[]) => {
      this.arrTransporte = transporte;
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
    this.createForm();
  }
  // Finalizamos la suscripción con el servicio al cerrar el componente.
  ngOnDestroy() {
    this.firebaseSubscription.unsubscribe();
    this.firestoreTransportesSubscription.unsubscribe();
  }
  ngOnChanges() {
    this.cleanForm();
  }

  createForm() {
    this.newEstadoForm = this.fb.group({
      estado:'Cargado',
      idTransporte: ['idTransporte', Validators.required],
      newEstado: this.fb.group({
        estado: 'Cargado',
        fecha: '',
      })
    });
  }
  /* Función que limpia el modelo del formulario para la actualización
   de los estados de los envíos. */
  cleanForm() {
    this.newEstadoForm.reset({
      idTransporte: 'idTransporte',
      newEstado: {
        fecha: '',
      }
    });
  }
  onUpdate(envio) {
    this.iE = envio.id;

  }
  updateSubmit() {
    let newEH = {};

    this.newEstadoForm.patchValue({
      newEstado: {
        estado: this.newEstadoForm.get('estado').value,
        fecha: Date.now()
      }
    });
console.log(this.iE);
    newEH = {
      estado: this.newEstadoForm.value.newEstado.estado,
      fecha: this.newEstadoForm.value.newEstado.fecha
    };
    this._data.updateEstadoEnvio(this.iE, newEH);
    this._data.asignarTrasporte(this.iE,this.newEstadoForm.value.idTransporte)
  }

}
