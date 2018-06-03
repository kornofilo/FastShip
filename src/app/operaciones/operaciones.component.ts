import { Component, OnInit } from '@angular/core';
// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../services/auth.service';
import { FirestoreMetodosEnvioService } from '../services/firestore-metodos-envio.service';
import { MetodosEnvio } from '../classes/metodos-envio';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
declare let $: any;



@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})

export class OperacionesComponent implements OnInit {
  public isLogIn: boolean;
  public email: string;
  arr: MetodosEnvio[] = [];
  updClicked: boolean;
  iME: string;
  // Elementos del Form
  cbTierra: boolean;
  cbMar: boolean;
  cbAire: boolean;

  title = 'app';
  model = { tiempo: '', tipos: []};
  constructor(public authService: AuthService, public _data: FirestoreMetodosEnvioService) {}

  ngOnInit() {
    this.authService.checkLogin().subscribe( auth => {
      if (auth) {
        this.email = auth.email;
      }
  });

  this._data.getMetodosEnvio().subscribe(
    (metodoEnvio: MetodosEnvio[]) => {
    this.arr = metodoEnvio;
   }
  );

    $(function() {
      $('.collapsible').collapsible();
      $('.modal').modal();
      $('select').formSelect();
      $('.dropdown-trigger').dropdown();
    });
  }

  onClickLogout() {
    this.authService.logout();
  }

  insertSubmit() {
    this.feedTipos();
    this._data.addMetodosEnvio(this.model);
    this.cleanForm();
  }

  onDelete(metodoEnvio) {
    this._data.deleteMetodosEnvio(metodoEnvio);
  }

  onUpdate(metodoEnvio) {
    this.iME = metodoEnvio.id;
    this.model.tiempo = metodoEnvio.tiempo;
    this.updClicked = true;
    metodoEnvio.tipos.forEach(element => {
      if (element === 'Tierra') {
        this.cbTierra = true;
      } else if (element === 'Mar') {
        this.cbMar = true;
      } else if (element === 'Aire') {
        this.cbAire = true;
      }

    });
  }

  updateSubmit() {
    this.feedTipos();
    this._data.updateMetodosEnvio(this.iME, this.model.tiempo, this.model.tipos);
    this.cleanForm();
  }

  cleanForm() {
    this.model.tiempo = '';
    this.model.tipos = [];
    this.cbTierra = false;
    this.cbMar = false;
    this.cbAire = false;
    this.updClicked = false;
  }

  feedTipos() {
    if (this.cbTierra) {
      this.model.tipos.push('Tierra');
    }

    if (this.cbMar) {
      this.model.tipos.push('Mar');
    }

    if (this.cbAire) {
      this.model.tipos.push('Aire');
    }
  }

}
