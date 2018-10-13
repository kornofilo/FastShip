import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesTransporteComponent } from './operaciones-transporte.component';

describe('OperacionesTransporteComponent', () => {
  let component: OperacionesTransporteComponent;
  let fixture: ComponentFixture<OperacionesTransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesTransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
