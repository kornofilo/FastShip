import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';


// Componentes
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import {OficinaComponent} from './oficina/oficina.component';
import { OperacionesMetodosEnvioComponent } from './operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component';
import { OperacionesOficinasComponent } from './operaciones/operaciones-oficinas/operaciones-oficinas.component';
import { OficinaRutasComponent } from './oficina/oficina-rutas/oficina-rutas.component';
import { OficinaSidenavComponent } from './oficina/oficina-sidenav/oficina-sidenav.component';
import { OficinaEnviosComponent } from './oficina/oficina-envios/oficina-envios.component';
import 'materialize-css';
// import { MaterializeModule } from 'angular2-materialize';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { IsLoggedGuard } from './guards/is-logged.guard';

// Guards
import { OperacionesNavbarComponent } from './operaciones/operaciones-navbar/operaciones-navbar.component';
import { OperacionesSidenavComponent } from './operaciones/operaciones-sidenav/operaciones-sidenav.component';

// Firebase
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';



/* Array de Rutas */
const routes: Routes = [
  {  path: '', component: LoginComponent, canActivate: [IsLoggedGuard] },
  {  path: 'login', component: LoginComponent, canActivate: [IsLoggedGuard] },
  {  path: 'operaciones', component: OperacionesComponent, canActivate: [AuthGuard] },
  {  path: 'metodosEnvio', component: OperacionesMetodosEnvioComponent, canActivate: [AuthGuard]},
  {  path: 'admOficinas', component: OperacionesOficinasComponent, canActivate: [AuthGuard]},
  {  path: 'usuario', component: UsuarioComponent },
  {  path: 'oficina',  component: OficinaComponent, canActivate: [AuthGuard]},
  {  path: 'tiendas/:tipo',  component: OficinaRutasComponent, canActivate: [AuthGuard]},
  {  path: 'envios',  component: OficinaEnviosComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    OperacionesComponent,
    UsuarioComponent,
    LoginComponent,
    OficinaComponent,
    OperacionesNavbarComponent,
    OperacionesSidenavComponent,
    OperacionesMetodosEnvioComponent,
    OperacionesOficinasComponent,
    OficinaRutasComponent,
    OficinaSidenavComponent,
    OficinaEnviosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})


export class AppModule { }
