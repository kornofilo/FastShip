import { Component, OnInit, OnDestroy } from '@angular/core';
declare let $: any;
import { Form } from '@angular/forms';
import { Envios } from '../../classes/envios';
import { Subscription } from 'rxjs';

// Firebase
import { AuthService } from '../../services/auth.service';
import { FirestoreEnviosService } from '../../services/firestore-envios.service';

@Component({
  selector: 'app-oficina-envios',
  templateUrl: './oficina-envios.component.html',
  styleUrls: ['./oficina-envios.component.css']
})
export class OficinaEnviosComponent implements OnInit, OnDestroy {
  formAddEnvio: Form;
  newEnvio: Envios;
  idEnvio: string;
  private firestoreSubscription: Subscription;
  constructor(public authService: AuthService, public _data: FirestoreEnviosService) {}

  ngOnInit() {
    $('select').formSelect();
    $('.modal').modal();
    $('.datepicker').datepicker({
        container: 'body'
      });
  }

  ngOnDestroy() {
    this.firestoreSubscription.unsubscribe();
  }

}
