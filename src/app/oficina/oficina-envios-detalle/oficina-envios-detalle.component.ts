import { Component, OnInit, OnDestroy } from '@angular/core';

// Firebase
import { FirestoreEnviosService } from '../../services/firestore-envios.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Envios } from '../../classes/envios';

@Component({
  selector: 'app-oficina-envios-detalle',
  templateUrl: './oficina-envios-detalle.component.html',
  styleUrls: ['./oficina-envios-detalle.component.css']
})
export class OficinaEnviosDetalleComponent implements OnInit, OnDestroy {
  trackingNumber: string;
  arr = [];
  envioBusq: Envios;


  // Inicialización de las Suscripciones.
  private firestoreEnviosSubscription: Subscription;

  constructor(public _envios: FirestoreEnviosService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.trackingNumber = this.route.snapshot.params['tn'];

    this.firestoreEnviosSubscription = this._envios.getHistorialEnvios(this.trackingNumber).subscribe(
      (envio: Envios) => {
      this.envioBusq = envio;
      this.arr = Object.values(this.envioBusq);
      console.log(this.envioBusq);
     }
    );
  }

  ngOnDestroy() {
    this.firestoreEnviosSubscription.unsubscribe();
  }

}
