import { Component, OnInit, OnDestroy } from '@angular/core';
declare let $: any;
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
  private firestoreSubscription: Subscription;
  constructor(public authService: AuthService, public _data: FirestoreEnviosService) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.firestoreSubscription.unsubscribe();
  }

}
