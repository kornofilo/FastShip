import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesVercargamentoComponent } from './operaciones-vercargamento.component';

describe('OperacionesVercargamentoComponent', () => {
  let component: OperacionesVercargamentoComponent;
  let fixture: ComponentFixture<OperacionesVercargamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesVercargamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesVercargamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
