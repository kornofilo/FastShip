import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesAsigtransporteComponent } from './operaciones-asigtransporte.component';

describe('OperacionesAsigtransporteComponent', () => {
  let component: OperacionesAsigtransporteComponent;
  let fixture: ComponentFixture<OperacionesAsigtransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesAsigtransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesAsigtransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
