import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesNombrerutaComponent } from './operaciones-nombreruta.component';

describe('OperacionesNombrerutaComponent', () => {
  let component: OperacionesNombrerutaComponent;
  let fixture: ComponentFixture<OperacionesNombrerutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesNombrerutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesNombrerutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
