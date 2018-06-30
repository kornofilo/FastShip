import { Component, OnInit } from '@angular/core';
declare let $: any;

// Firebase
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-oficina-sidenav',
  templateUrl: './oficina-sidenav.component.html',
  styleUrls: ['./oficina-sidenav.component.css']
})
export class OficinaSidenavComponent implements OnInit {
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
