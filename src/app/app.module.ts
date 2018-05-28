import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

/* Array de Rutas */
const routes: Routes = [
  {  path: 'operaciones', component: OperacionesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    OperacionesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
