import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesSidenavComponent } from './operaciones-sidenav.component';

describe('OperacionesSidenavComponent', () => {
  let component: OperacionesSidenavComponent;
  let fixture: ComponentFixture<OperacionesSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
