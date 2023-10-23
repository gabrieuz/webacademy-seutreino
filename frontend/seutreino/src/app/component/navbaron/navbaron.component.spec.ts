import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaronComponent } from './navbaron.component';

describe('NavbaronComponent', () => {
  let component: NavbaronComponent;
  let fixture: ComponentFixture<NavbaronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbaronComponent]
    });
    fixture = TestBed.createComponent(NavbaronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
