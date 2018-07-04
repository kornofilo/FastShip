import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTrackingComponent } from './usuario-tracking.component';

describe('UsuarioTrackingComponent', () => {
  let component: UsuarioTrackingComponent;
  let fixture: ComponentFixture<UsuarioTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
