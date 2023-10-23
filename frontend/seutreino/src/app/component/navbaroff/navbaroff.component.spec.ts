import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaroffComponent } from './navbaroff.component';

describe('NavbaroffComponent', () => {
  let component: NavbaroffComponent;
  let fixture: ComponentFixture<NavbaroffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbaroffComponent]
    });
    fixture = TestBed.createComponent(NavbaroffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
