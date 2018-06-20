import { Component, OnInit, OnDestroy } from '@angular/core';
import { MetodosEnvio } from '../../classes/metodos-envio';
declare let $: any;
import { Subscription } from 'rxjs';

// Firebase
import { AuthService } from '../../services/auth.service';
import { FirestoreMetodosEnvioService } from '../../services/firestore-metodos-envio.service';


@Component({
  selector: 'app-operaciones-metodos-envio',
  templateUrl: './operaciones-metodos-envio.component.html',
  styleUrls: ['./operaciones-metodos-envio.component.css']
})
export class OperacionesMetodosEnvioComponent implements OnInit, OnDestroy {
  public email: string;
  arr: MetodosEnvio[] = [];
  updClicked = false;
  iME: string;
  // Elementos del Form
  cbTierra: boolean;
  cbMar: boolean;
  cbAire: boolean;
  model = { tiempo: '', tipos: []};
  private firebaseSubscription: Subscription;
  constructor(public authService: AuthService, public _data: FirestoreMetodosEnvioService) {}

  ngOnInit() {
      // Obtenemos los métodos envío registrados en la base de datos.
      this.firebaseSubscription = this._data.getMetodosEnvio().subscribe(
        (metodoEnvio: MetodosEnvio[]) => {
         this.arr = metodoEnvio;
       }
      );

    // Inicialización de los elementos de Materialize que requieren Jquery.
    $(function() {
      $('.collapsible').collapsible();
      $('select').formSelect();
      $('.dropdown-trigger').dropdown();
      $('.modal').modal();
    });
  }

  // Finalizamos la suscripción con el servicio al cerrar el componente.
  ngOnDestroy() {
    this.firebaseSubscription.unsubscribe();
  }

  // Función que envía el modelo a la función de insertar método de envío en el service.
  insertSubmit() {
    this.feedTipos();
    this._data.addMetodosEnvio(this.model);
    this.cleanForm();
  }

  onDelete(metodoEnvio) {
    if (confirm('¿Está seguro que desea borrar este método de envío?')) {
      this._data.deleteMetodosEnvio(metodoEnvio);
    }
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
