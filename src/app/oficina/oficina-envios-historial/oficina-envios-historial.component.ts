import { Component, OnInit, OnDestroy } from '@angular/core';
declare let $: any;

// Firebase
import { FirestoreEnviosService } from '../../services/firestore-envios.service';
import { Form } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Envios } from '../../classes/envios';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-oficina-envios-historial',
  templateUrl: './oficina-envios-historial.component.html',
  styleUrls: ['./oficina-envios-historial.component.css']
})
export class OficinaEnviosHistorialComponent implements OnInit, OnDestroy {
  trackingNumber: string;
  arr = [];
  envioBusq: Envios;
  cantEstados: number;

  // Inicialización de las Suscripciones.
  private firestoreEnviosSubscription: Subscription;

  constructor(public _envios: FirestoreEnviosService, public route: ActivatedRoute) {}


  ngOnInit() {
    this.trackingNumber = this.route.snapshot.params['tn'];
    console.log(this.trackingNumber);

    this.firestoreEnviosSubscription = this._envios.getHistorialEnvios(this.trackingNumber).subscribe(
      (envio: Envios) => {
      this.envioBusq = envio;
      this.arr = Object.values(this.envioBusq.historial);
      this.arr.reverse();
     }
    );

     // Inicialización de los elementos de Materialize que requieren JQuery para su funcionamiento.
     $(function() {
    });
  }

  ngOnDestroy() {
    this.firestoreEnviosSubscription.unsubscribe();
  }

  objectValues(envio) {
  }

}
