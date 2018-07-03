import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare let $: any;
import { Subscription } from 'rxjs';
import { Transporte } from '../../classes/transporte';
// Firebase
import { AuthService } from '../../services/auth.service';
import { FirestoreTransportesEnvioService} from '../../services/firestore-transportes-envio.service';

@Component({
  selector: 'app-operaciones-vercargamento',
  templateUrl: './operaciones-vercargamento.component.html',
  styleUrls: ['./operaciones-vercargamento.component.css']
})
export class OperacionesVercargamentoComponent implements OnInit {

  arrtranspCarga:Transporte[] = [];

    // Suscripcipción
    private firebasetranspCargaSubscription: Subscription;

  constructor(public authService: AuthService, public _transpCarga: FirestoreTransportesEnvioService,
     private fb: FormBuilder) {
  }

  ngOnInit() {
  // Obtenemos los transporte registradas en la base de datos.
  this.firebasetranspCargaSubscription = this._transpCarga.gettranspEstadoType().subscribe(
  (transporte: Transporte[]) => {
  this.arrtranspCarga = transporte;
    console.log(this.arrtranspCarga);
   }
  );
  }

}
