import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfessionalComponent } from './form-professional.component';

describe('FormProfessionalComponent', () => {
  let component: FormProfessionalComponent;
  let fixture: ComponentFixture<FormProfessionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProfessionalComponent]
    });
    fixture = TestBed.createComponent(FormProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
