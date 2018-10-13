import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaEnviosComponent } from './oficina-envios.component';

describe('OficinaEnviosComponent', () => {
  let component: OficinaEnviosComponent;
  let fixture: ComponentFixture<OficinaEnviosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinaEnviosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinaEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
