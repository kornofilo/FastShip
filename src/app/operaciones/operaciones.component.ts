import { Component, OnInit } from '@angular/core';
// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../auth.service';
declare let $: any;



@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})

export class OperacionesComponent implements OnInit {
  title = 'Operaciones';
  constructor(public authService: AuthService) {}

  ngOnInit() {
    // this.authService.checkLogin();
    $(function() {
      $('.collapsible').collapsible();
      $('.modal').modal();
      $('select').formSelect();
    });
  }

}
