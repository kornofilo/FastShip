import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesSubRutasComponent } from './operaciones-sub-rutas.component';

describe('OperacionesSubRutasComponent', () => {
  let component: OperacionesSubRutasComponent;
  let fixture: ComponentFixture<OperacionesSubRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesSubRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesSubRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
