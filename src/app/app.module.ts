import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';



// Componentes
import { UsuarioComponent } from './usuario/usuario.component';
import {OficinaComponent} from './oficina/oficina.component';
import { OperacionesMetodosEnvioComponent } from './operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component';
import { OperacionesOficinasComponent } from './operaciones/operaciones-oficinas/operaciones-oficinas.component';
import { OficinaRutasComponent } from './oficina/oficina-rutas/oficina-rutas.component';
import { OficinaSidenavComponent } from './oficina/oficina-sidenav/oficina-sidenav.component';
import { OficinaEnviosComponent } from './oficina/oficina-envios/oficina-envios.component';
import { OperacionesRutasComponent } from './operaciones/operaciones-rutas/operaciones-rutas.component';
import { OperacionesSubRutasComponent } from './operaciones/operaciones-sub-rutas/operaciones-sub-rutas.component';
import { OperacionesNavbarComponent } from './operaciones/operaciones-navbar/operaciones-navbar.component';
import { OperacionesSidenavComponent } from './operaciones/operaciones-sidenav/operaciones-sidenav.component';
import { OperacionesCargamentosComponent } from './operaciones/operaciones-cargamentos/operaciones-cargamentos.component';
import { OficinaEnviosEstadosComponent } from './oficina/oficina-envios-estados/oficina-envios-estados.component';
import { OficinaEnviosHistorialComponent } from './oficina/oficina-envios-historial/oficina-envios-historial.component';


// import { MaterializeModule } from 'angular2-materialize';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';


// Guards
import { AuthGuard } from './guards/auth.guard';
import { IsLoggedGuard } from './guards/is-logged.guard';


// Firebase
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { OperacionesTransporteComponent } from './operaciones/operaciones-transporte/operaciones-transporte.component';
import { OficinaEnviosDetalleComponent } from './oficina/oficina-envios-detalle/oficina-envios-detalle.component';
import { OperacionesVercargamentoComponent } from './operaciones/operaciones-vercargamento/operaciones-vercargamento.component';
import { OperacionesCreartransporteComponent } from './operaciones/operaciones-creartransporte/operaciones-creartransporte.component';
import { OperacionesAsigtransporteComponent } from './operaciones/operaciones-asigtransporte/operaciones-asigtransporte.component';
import { OperacionesDetalletransporteComponent } from './operaciones/operaciones-detalletransporte/operaciones-detalletransporte.component';
import { UsuarioNavbarComponent } from './usuario/usuario-navbar/usuario-navbar.component';
import { UsuarioTrackingComponent } from './usuario/usuario-tracking/usuario-tracking.component';
import { OperacionesNombrerutaComponent } from './operaciones/operaciones-nombreruta/operaciones-nombreruta.component';
import { IndexComponent } from './index/index.component';
import { IndexNavbarComponent } from './index/index-navbar/index-navbar.component';




// Array de Rutas
const routes: Routes = [
  {  path: '', component: IndexComponent},
  {  path: 'operaciones', component: OperacionesComponent, canActivate: [AuthGuard] },
  {  path: 'metodosEnvio', component: OperacionesMetodosEnvioComponent, canActivate: [AuthGuard]},
  {  path: 'admOficinas', component: OperacionesOficinasComponent, canActivate: [AuthGuard]},
  {  path: 'usuario', component: UsuarioComponent },
  {  path: 'oficina',  component: OficinaComponent, canActivate: [AuthGuard]},
  {  path: 'tiendas/:tipo',  component: OficinaRutasComponent, canActivate: [AuthGuard]},
  {  path: 'envios',  component: OficinaEnviosComponent, canActivate: [AuthGuard]},
  {  path: 'envios/:tn',  component: OficinaEnviosDetalleComponent, canActivate: [AuthGuard]},
  {  path: 'envios-estados',  component: OficinaEnviosEstadosComponent, canActivate: [AuthGuard]},
  {  path: 'envios-estados/:tn',  component: OficinaEnviosHistorialComponent, canActivate: [AuthGuard]},
  {  path: 'rutas',  component: OperacionesRutasComponent, canActivate: [AuthGuard]},
  {  path: 'subrutas',  component: OperacionesSubRutasComponent, canActivate: [AuthGuard]},
  {  path: 'cargamentos',  component: OperacionesCargamentosComponent, canActivate: [AuthGuard]},
  {  path: 'cargamentos/:origen',  component: OperacionesTransporteComponent, canActivate: [AuthGuard]},
  {  path: 'transporte/:transporte',  component: OperacionesAsigtransporteComponent, canActivate: [AuthGuard]},
  {  path: 'vercargamento',  component:  OperacionesVercargamentoComponent, canActivate: [AuthGuard]},
  {  path: 'detalle/:transporte',  component:  OperacionesDetalletransporteComponent , canActivate: [AuthGuard]},
  {  path: 'ruta/:nombre',  component:  OperacionesNombrerutaComponent , canActivate: [AuthGuard]},
  {  path: 'creartransporte',  component:  OperacionesCreartransporteComponent, canActivate: [AuthGuard]},
  {  path: 'tracking/:tn',  component:  UsuarioTrackingComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    OperacionesComponent,
    UsuarioComponent,
    OficinaComponent,
    OperacionesNavbarComponent,
    OperacionesSidenavComponent,
    OperacionesMetodosEnvioComponent,
    OperacionesOficinasComponent,
    OficinaRutasComponent,
    OficinaSidenavComponent,
    OficinaEnviosComponent,
    OperacionesRutasComponent,
    OperacionesSubRutasComponent,
    OperacionesCargamentosComponent,
    OficinaEnviosEstadosComponent,
    OperacionesTransporteComponent,
    OficinaEnviosEstadosComponent,
    OficinaEnviosHistorialComponent,
    OficinaEnviosDetalleComponent,
    OperacionesVercargamentoComponent,
    OperacionesCreartransporteComponent,
    UsuarioNavbarComponent,
    UsuarioTrackingComponent,
    OperacionesAsigtransporteComponent,
    OperacionesDetalletransporteComponent,
    OperacionesCreartransporteComponent,
    UsuarioNavbarComponent,
    OperacionesNombrerutaComponent,
    IndexComponent,
    IndexNavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})


export class AppModule { }
