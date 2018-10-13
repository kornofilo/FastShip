import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNavbarComponent } from './usuario-navbar.component';

describe('UsuarioNavbarComponent', () => {
  let component: UsuarioNavbarComponent;
  let fixture: ComponentFixture<UsuarioNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
