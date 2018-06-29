import { Component, OnInit } from '@angular/core';
declare let $: any;


// Firebase
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-operaciones-navbar',
  templateUrl: './operaciones-navbar.component.html',
  styleUrls: ['./operaciones-navbar.component.css']
})

export class OperacionesNavbarComponent implements OnInit {
  public email: string;
  public profileImg: string;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    // Obtenemos el e-mail del usuario logueado.
    this.authService.checkLogin().subscribe( authFB => {
      if (authFB) {
        this.email = authFB.email;
      }
    });

    $(function() {
      $('.dropdown-trigger').dropdown({
        coverTrigger: false
      });
    });
  }

  // Función que al ser activada, cierra la sesión de Firebase.
  onClickLogout() {
    this.authService.logout();
  }

}
