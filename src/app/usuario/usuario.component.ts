import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  bTrackingForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.bTrackingForm = this.fb.group({
      numTracking: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('OnSubmit');
    this.router.navigate(['/usuario/tracking/', this.bTrackingForm.get('numTracking').value]);
  }

}
