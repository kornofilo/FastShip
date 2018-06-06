import { Component, OnInit } from '@angular/core';
declare let $: any;


@Component({
  selector: 'app-operaciones-sidenav',
  templateUrl: './operaciones-sidenav.component.html',
  styleUrls: ['./operaciones-sidenav.component.css']
})
export class OperacionesSidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('.sidenav').sidenav();
    });
  }

}
