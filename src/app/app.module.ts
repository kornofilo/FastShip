import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { auth } from 'firebase/app';
import { AppComponent } from './app.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import {OficinaComponent} from './oficina/oficina.component';
import 'materialize-css';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { OperacionesNavbarComponent } from './operaciones/operaciones-navbar/operaciones-navbar.component';


// Firebase
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';


/* Array de Rutas */
const routes: Routes = [
  {  path: '', component: LoginComponent },
  {  path: 'login', component: LoginComponent },
  {  path: 'operaciones', component: OperacionesComponent, canActivate: [AuthGuard] },
  {  path: 'usuario', component: UsuarioComponent },
  {  path: 'oficina',  component: OficinaComponent, canActivate: [AuthGuard]}

];

@NgModule({
  declarations: [
    AppComponent,
    OperacionesComponent,
    UsuarioComponent,
    LoginComponent,
    OficinaComponent,
    OperacionesNavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})


export class AppModule { }
