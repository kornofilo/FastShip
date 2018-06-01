import { Component, OnInit } from '@angular/core';
//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styleUrls: ['./oficina.component.css']
})
export class OficinaComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.checkLogin();
  }

}
