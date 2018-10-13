import { Component, OnInit } from '@angular/core';
declare let $: any;
import { AuthService } from '../../services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-index-navbar',
  templateUrl: './index-navbar.component.html',
  styleUrls: ['./index-navbar.component.css']
})
export class IndexNavbarComponent implements OnInit {

  constructor(public authService: AuthService, private fb: FormBuilder, private router: Router) {}  
  loginForm: FormGroup;
  packagesTrackingForm: FormGroup;


  ngOnInit() {

    this.createForm();

    // Inicialización de los elementos de Materialize que requieren Jquery.
    $(function() {      
      $('.modal').modal();
    });
  }

  //Función que se encarga de llamar al servicio de autenticación de Firebase para validar las credenciales ingresadas por el usuario.
  onLogin() {
    this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)      
    .then(res => {
      console.log(res);
      //Si las credenciales son correctas, se redirige al usuario al componente de operaciones.
      location.replace('operaciones');
    }).catch( (err) => {
      // Gestión de errores de autenticación.
      if (err.code === 'auth/wrong-password') { //Si la contraseña ingresada es incorrecta.
        alert('El Nombre de Usuario o Contraseña ingresada son incorrectos. Inténtelo de nuevo.');
      } else if (err.code === 'auth/invalid-email') { //Si el formato del email ingresado es incorrecto.
        alert('El formato del correo electrónico ingresado es inválido. Inténtelo de nuevo.');
      } else if (err.code === 'auth/user-not-found') { //Si el email ingresado no se encuentra segistrado en el sistema.
        alert('El correo ingresado no se encuentra registrado en el sistema. Inténtelo de nuevo.');
      }
    });
  }

  onTracking() {
    this.router.navigate(['/tracking/', this.packagesTrackingForm.get('numTracking').value]);
  }

  // Función para la creación de los FormGroup de Inicio de Sesión y Rastreo de Paquetes.
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],      
    });

    this.packagesTrackingForm = this.fb.group({
      numTracking: ['', Validators.required],
    });
  }



}
