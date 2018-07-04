import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Form,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Transporte } from '../../classes/transporte';
import { Oficina } from '../../classes/oficina';
declare let $: any;
//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { FirestoreTransportesEnvioService} from '../../services/firestore-transportes-envio.service';
import { FirestoreOficinaService } from '../../services/firestore-oficina.service';
@Component({
  selector: 'app-operaciones-creartransporte',
  templateUrl: './operaciones-creartransporte.component.html',
  styleUrls: ['./operaciones-creartransporte.component.css']
})
export class OperacionesCreartransporteComponent implements OnInit, OnDestroy, OnChanges {

  arrmiTransporte: Transporte[]=[];
  arrmiOficina: Oficina[]=[];
  updClicked = false;
  iME: string;
  // Elementos del Form
  crearTransporteform: FormGroup;
  // Suscripcipción
  private firebasemiOficinaSubscription: Subscription;
    private firestorecrearTransportesSubscription: Subscription;

tipo = ['Terrestre', 'Maritimo', 'Aereo'];

  constructor(public authService: AuthService, public _data: FirestoreTransportesEnvioService,public _miOficina: FirestoreOficinaService,
     private fb: FormBuilder) { }

  ngOnInit() {
    this.firestorecrearTransportesSubscription=this._data.getTransporte().subscribe(
      (transporte:Transporte[])=>{
      this.arrmiTransporte=transporte;
      console.log(this.arrmiTransporte);
    }
  );

    this.firebasemiOficinaSubscription=this._miOficina.getOficinas().subscribe(
      (oficina:Oficina[])=>{
      this.arrmiOficina= oficina;
      console.log(this.arrmiTransporte);
    }
  );
  // Inicialización de los elementos de Materialize que requieren JQuery para su funcionamiento.
  $(function() {
    $('select').formSelect();
      $('.modal').modal();
  });
  this.createForm();
  }
  // Finalizamos la suscripción con el servicio al cerrar el componente.
  ngOnDestroy() {
    this.firebasemiOficinaSubscription.unsubscribe();
    this.firestorecrearTransportesSubscription.unsubscribe();
  }

  ngOnChanges() {
    this.cleanForm();
  }

  createForm() {
    this.crearTransporteform = this.fb.group({
      idPlaca:  ['', Validators.required],
      tipo: ['', Validators.required],
      oficinaAsig: ['', Validators.required],
      destinoAsig: 'Por Asignar',
      estado: 'vacio',
    });
  }
  cleanForm() {
this.crearTransporteform.reset();
  }
  // Función que envía el modelo a la función de insertar transporte en el service.
  insertSubmit() {
    console.log('Insertando...');
    this._data.addTransporte(this.crearTransporteform.value);
  }

  onUpdate(transp) {
    this.iME = transp.id;
    this.updClicked = true;
    this.crearTransporteform.patchValue({
      idPlaca: transp.idPlaca,
      tipo: transp.tipo,
     oficinaAsig: transp.oficinaAsig,
    });
  }

  updateSubmit() {
    this._data.updateTransporte(this.iME, this.crearTransporteform.value);
    this.cleanForm();
  }

}
