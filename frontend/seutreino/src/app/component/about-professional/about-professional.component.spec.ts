import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProfessionalComponent } from './about-professional.component';

describe('AboutProfessionalComponent', () => {
  let component: AboutProfessionalComponent;
  let fixture: ComponentFixture<AboutProfessionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutProfessionalComponent]
    });
    fixture = TestBed.createComponent(AboutProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
