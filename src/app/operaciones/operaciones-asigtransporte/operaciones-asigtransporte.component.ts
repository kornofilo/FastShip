import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Transporte } from '../../classes/transporte';
import { Envios } from '../../classes/envios';
declare let $: any;
// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FirestoreEnviosService } from '../../services/firestore-envios.service';
import { FirestoreTransportesEnvioService} from '../../services/firestore-transportes-envio.service';
@Component({
  selector: 'app-operaciones-asigtransporte',
  templateUrl: './operaciones-asigtransporte.component.html',
  styleUrls: ['./operaciones-asigtransporte.component.css']
})
export class OperacionesAsigtransporteComponent implements OnInit, OnDestroy, OnChanges {
  arrTransporte: Transporte [] = [];
  arr: Envios[] = [];
    arre: Envios[] = [];
    transporte: string;
    updClicked = false;
    iME: string;
    placa: string;
    destinos = [];
    destinosU = [];
    // Elementos del Form
    crearTransporteform: FormGroup;

private firebaseEnvioSubscription: Subscription;
private firebaseDestinoSubscription: Subscription;
private firestoreTransportesSubscription: Subscription;

  constructor(public authService: AuthService , public _misTransporte: FirestoreTransportesEnvioService,  public route: ActivatedRoute
    , public _miDestino:  FirestoreEnviosService, private fb: FormBuilder
  ) {}

  ngOnInit() {
      this.transporte = this.route.snapshot.params['transporte'];
    console.log(this.transporte);
    // Obtenemos los transporte registradas en la base de datos.
    this.firestoreTransportesSubscription = this._misTransporte.getTransporteType(this.transporte).subscribe(
    (transporte: Transporte[]) => {
    this.arrTransporte = transporte;
      console.log(this.arrTransporte);
     }
    );


    this.transporte = this.route.snapshot.params['transporte'];
    console.log(this.transporte);
    // Obtenemos las guias registradas en la base de datos.
    this.firebaseDestinoSubscription = this._miDestino.getTiendasType(this.transporte).subscribe(
      (envio: Envios[]) => {
      this.arre = envio;
      this.arre.forEach( (element, i) => {
        this.destinos[i] = element.detalles.destino;
      });
      this.destinosU = Array.from(new Set(this.destinos));
      console.log(this.destinosU);
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
    this.firestoreTransportesSubscription.unsubscribe();
    this.firebaseDestinoSubscription.unsubscribe();
  }
  ngOnChanges() {
    this.cleanForm();
  }

  createForm() {
    this.crearTransporteform = this.fb.group({
      destinoAsig: ['', Validators.required],
      estado: 'cargado',
    });
  }


  cleanForm() {
this.crearTransporteform.reset();
}

  onUpdate(transp) {
    this.iME = transp.id;
    this.placa = transp.idPlaca;
    this.updClicked = true;
    this.crearTransporteform.patchValue({
     destinoAsig: transp.destinoAsig,
     estado: 'cargado',
    });
  }


  updateSubmit() {

    // Actualizamos el destino del transporte.
    this._misTransporte.updateTransporte(this.iME, this.crearTransporteform.value);

    this.firebaseEnvioSubscription = this._miDestino.getEnviosByOrigAndDest(this.transporte,
      this.crearTransporteform.get('destinoAsig').value).subscribe(
      (envio: Envios[]) => {
      this.arr = envio;
      console.log(this.arr);
      const newEH = {
        estado: 'Cargado',
        fecha: Date.now()
      };

      this.arr.forEach( (element) => {
          console.log(element.id, newEH, this.placa);
          this._miDestino.updateEstadoEnvio(element.id, newEH);
          this._miDestino.asignarTrasporte(element.id, this.placa);
          this.firebaseEnvioSubscription.unsubscribe();
        });
    });
    this.cleanForm();
  }


}
