import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaEnviosEstadosComponent } from './oficina-envios-estados.component';

describe('OficinaEnviosEstadosComponent', () => {
  let component: OficinaEnviosEstadosComponent;
  let fixture: ComponentFixture<OficinaEnviosEstadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinaEnviosEstadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinaEnviosEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
