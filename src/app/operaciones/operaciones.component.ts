import { Component, OnInit } from '@angular/core';
// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../services/auth.service';
declare let $: any;



@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})

export class OperacionesComponent implements OnInit {
  public isLogIn: boolean;
  public email: string;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.checkLogin().subscribe( auth => {
      if (auth) {
        this.email = auth.email;
      }
  });

    $(function() {
      $('.collapsible').collapsible();
      $('.modal').modal();
      $('select').formSelect();
      $('.dropdown-trigger').dropdown();
    });
  }

  onClickLogout() {
    this.authService.logout();
  }

}
