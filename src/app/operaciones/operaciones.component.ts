import { Component, OnInit } from '@angular/core';
// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../services/auth.service';
import { FirestoreMetodosEnvioService } from '../services/firestore-metodos-envio.service';
import { MetodosEnvio } from '../classes/metodos-envio';
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
  title = 'app';
  model = { tiempo: '', tipos: ''};
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
    this._data.addMetodosEnvio(this.model);
    this.model.tiempo = '';
    this.model.tipos = '';
  }
  onDelete(metodoEnvio) {
    console.log('Delete!');
    this._data.deleteMetodosEnvio(metodoEnvio);
  }

  onUpdate(metodoEnvio) {
    this.model.tiempo = metodoEnvio.tiempo;
    this.model.tipos = metodoEnvio.tipos;
  }

  updateSubmit(metodoEnvio) {
    this._data.updateMetodosEnvio(metodoEnvio, this.model.tiempo, this.model.tipos);
  }

}
