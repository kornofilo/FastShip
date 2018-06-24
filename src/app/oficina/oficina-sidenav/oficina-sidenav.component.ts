import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-oficina-sidenav',
  templateUrl: './oficina-sidenav.component.html',
  styleUrls: ['./oficina-sidenav.component.css']
})
export class OficinaSidenavComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('.sidenav').sidenav();
      $('.collapsible').collapsible();
    });
  }

}
