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
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.checkLogin().subscribe( authFB => {
      if (authFB) {
        this.email = authFB.email;
      }
    });

    $(function() {
      $('.modal').modal();
    });
  }

}