import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaEnviosDetalleComponent } from './oficina-envios-detalle.component';

describe('OficinaEnviosDetalleComponent', () => {
  let component: OficinaEnviosDetalleComponent;
  let fixture: ComponentFixture<OficinaEnviosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinaEnviosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinaEnviosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
