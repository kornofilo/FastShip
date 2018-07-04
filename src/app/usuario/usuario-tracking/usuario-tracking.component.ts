import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Firebase
import { FirestoreEnviosService } from '../../services/firestore-envios.service';
import { Subscription } from 'rxjs';
import { Envios } from '../../classes/envios';

@Component({
  selector: 'app-usuario-tracking',
  templateUrl: './usuario-tracking.component.html',
  styleUrls: ['./usuario-tracking.component.css']
})
export class UsuarioTrackingComponent implements OnInit, OnDestroy {
  trackingNumber: string;
  envioBusq: Envios;
  cantEstados: number;
  arr = [];


   // Inicialización de las Suscripciones.
   private firestoreEnviosSubscription: Subscription;

  constructor(public _envios: FirestoreEnviosService, public route: ActivatedRoute) { }

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
  }

  ngOnDestroy() {
    this.firestoreEnviosSubscription.unsubscribe();
  }

}
