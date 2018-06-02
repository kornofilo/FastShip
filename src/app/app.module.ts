import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { auth } from 'firebase/app';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {OficinaComponent} from './oficina/oficina.component';
import 'materialize-css';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';


// Firebase
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';



/* Array de Rutas */
const routes: Routes = [
  {  path: 'home', component: HomeComponent },
  {  path: 'login', component: LoginComponent },
  {  path: 'operaciones', component: OperacionesComponent, canActivate: [AuthGuard] },
  {  path: 'usuario', component: UsuarioComponent },
  {  path: 'oficina',  component: OficinaComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    OperacionesComponent,
    NavbarComponent,
    UsuarioComponent,
    HomeComponent,
    LoginComponent,
    OficinaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})


export class AppModule { }
