import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesMetodosEnvioComponent } from './operaciones-metodos-envio.component';

describe('OperacionesMetodosEnvioComponent', () => {
  let component: OperacionesMetodosEnvioComponent;
  let fixture: ComponentFixture<OperacionesMetodosEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesMetodosEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesMetodosEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
