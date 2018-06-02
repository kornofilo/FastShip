import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../services/auth.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}
  public email: string;
  public password: string;
  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.login(this.email, this.password)
    .then(res => {
      console.log(res);
      location.replace('operaciones');
    }).catch( (err) => {
      if (err.code === 'auth/wrong-password') {
        alert('El Nombre de Usuario o Contraseña ingresada son incorrectos. Inténtelo de nuevo.');
      } else if (err.code === 'auth/invalid-email') {
        alert('El formato del correo electrónico ingresado es inválido. Inténtelo de nuevo.');
      } else if (err.code === 'auth/user-not-found') {
        alert('El correo ingresado no se encuentra registrado en el sistema. Inténtelo de nuevo.');
      }
    });
  }
}
