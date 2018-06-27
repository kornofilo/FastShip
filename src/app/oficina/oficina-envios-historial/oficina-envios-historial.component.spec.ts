import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaEnviosHistorialComponent } from './oficina-envios-historial.component';

describe('OficinaEnviosHistorialComponent', () => {
  let component: OficinaEnviosHistorialComponent;
  let fixture: ComponentFixture<OficinaEnviosHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinaEnviosHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinaEnviosHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
