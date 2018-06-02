import { Component, OnInit } from '@angular/core';

// Firebases
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(firebase.auth().currentUser);
  }

}
