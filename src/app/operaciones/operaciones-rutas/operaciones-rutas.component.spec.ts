import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesRutasComponent } from './operaciones-rutas.component';

describe('OperacionesRutasComponent', () => {
  let component: OperacionesRutasComponent;
  let fixture: ComponentFixture<OperacionesRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
