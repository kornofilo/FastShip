import { Component, OnInit } from '@angular/core';
import { Oficina } from '../../classes/oficina';
declare let $: any;

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { FirestoreOficinaService } from '../../services/firestore-oficina.service';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';


@Component({
  selector: 'app-operaciones-oficinas',
  templateUrl: './operaciones-oficinas.component.html',
  styleUrls: ['./operaciones-oficinas.component.css']
})
export class OperacionesOficinasComponent implements OnInit {
  arr: Oficina[] = [];
  constructor(public authService: AuthService, public _data: FirestoreOficinaService) {}

  ngOnInit() {
    this._data.getOficinas().subscribe(
      (oficina: Oficina[]) => {
      this.arr = oficina;
     }
    );
  }

}
