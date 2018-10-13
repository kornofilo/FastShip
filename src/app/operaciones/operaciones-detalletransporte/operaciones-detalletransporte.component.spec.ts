import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesDetalletransporteComponent } from './operaciones-detalletransporte.component';

describe('OperacionesDetalletransporteComponent', () => {
  let component: OperacionesDetalletransporteComponent;
  let fixture: ComponentFixture<OperacionesDetalletransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesDetalletransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesDetalletransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
