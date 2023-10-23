import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProfessionalComponent } from './profile-professional.component';

describe('ProfileProfessionalComponent', () => {
  let component: ProfileProfessionalComponent;
  let fixture: ComponentFixture<ProfileProfessionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileProfessionalComponent]
    });
    fixture = TestBed.createComponent(ProfileProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
