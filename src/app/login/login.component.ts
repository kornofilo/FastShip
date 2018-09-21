import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(public authService: AuthService, private fb: FormBuilder) {}  
  loginForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  //Función que se encarga de llamar al servicio de autenticación de Firebase para validar las credenciales ingresadas por el usuario.
  onSubmit() {
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

  // Función para la creación del FormGroup que contiene las credenciales de inicio de sesión.
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],      
    });
  }
}
