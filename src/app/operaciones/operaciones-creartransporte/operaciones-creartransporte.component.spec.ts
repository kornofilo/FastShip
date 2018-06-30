import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesCreartransporteComponent } from './operaciones-creartransporte.component';

describe('OperacionesCreartransporteComponent', () => {
  let component: OperacionesCreartransporteComponent;
  let fixture: ComponentFixture<OperacionesCreartransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesCreartransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesCreartransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
