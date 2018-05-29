import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

/* Array de Rutas */
const routes: Routes = [
  {  path: 'home', component: HomeComponent },
  {  path: 'login', component: LoginComponent },
  {  path: 'operaciones', component: OperacionesComponent },
  {  path: 'usuario', component: UsuarioComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    OperacionesComponent,
    NavbarComponent,
    UsuarioComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
