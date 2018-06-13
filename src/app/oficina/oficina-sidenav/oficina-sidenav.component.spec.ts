import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaSidenavComponent } from './oficina-sidenav.component';

describe('OficinaSidenavComponent', () => {
  let component: OficinaSidenavComponent;
  let fixture: ComponentFixture<OficinaSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinaSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinaSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
