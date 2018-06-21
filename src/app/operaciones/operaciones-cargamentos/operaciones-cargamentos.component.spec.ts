import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesCargamentosComponent } from './operaciones-cargamentos.component';

describe('OperacionesCargamentosComponent', () => {
  let component: OperacionesCargamentosComponent;
  let fixture: ComponentFixture<OperacionesCargamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesCargamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesCargamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
