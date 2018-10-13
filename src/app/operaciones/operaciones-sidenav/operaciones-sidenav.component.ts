import { Component, OnInit } from '@angular/core';
declare let $: any;

// Firebase
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-operaciones-sidenav',
  templateUrl: './operaciones-sidenav.component.html',
  styleUrls: ['./operaciones-sidenav.component.css']
})
export class OperacionesSidenavComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit() {
    $(document).ready(function() {
      $('.sidenav').sidenav();
      $('.collapsible').collapsible();
    });
  }

  // Función que al ser activada, cierra la sesión de Firebase.
  onClickLogout() {
    this.authService.logout();
  }


}
