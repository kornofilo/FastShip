import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaRutasComponent } from './oficina-rutas.component';

describe('OficinaRutasComponent', () => {
  let component: OficinaRutasComponent;
  let fixture: ComponentFixture<OficinaRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinaRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinaRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
