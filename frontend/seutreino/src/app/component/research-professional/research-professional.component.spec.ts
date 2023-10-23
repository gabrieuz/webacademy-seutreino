import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProfessionalComponent } from './research-professional.component';

describe('ResearchProfessionalComponent', () => {
  let component: ResearchProfessionalComponent;
  let fixture: ComponentFixture<ResearchProfessionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchProfessionalComponent]
    });
    fixture = TestBed.createComponent(ResearchProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
