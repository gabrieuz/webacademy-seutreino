import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProfessionalComponent } from './services-professional.component';

describe('ServicesProfessionalComponent', () => {
  let component: ServicesProfessionalComponent;
  let fixture: ComponentFixture<ServicesProfessionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesProfessionalComponent]
    });
    fixture = TestBed.createComponent(ServicesProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
