import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesOficinasComponent } from './operaciones-oficinas.component';

describe('OperacionesOficinasComponent', () => {
  let component: OperacionesOficinasComponent;
  let fixture: ComponentFixture<OperacionesOficinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesOficinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesOficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
