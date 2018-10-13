import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesNavbarComponent } from './operaciones-navbar.component';

describe('OperacionesNavbarComponent', () => {
  let component: OperacionesNavbarComponent;
  let fixture: ComponentFixture<OperacionesNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
