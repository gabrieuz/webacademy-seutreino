import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedProfessionalComponent } from './logged-professional.component';

describe('LoggedProfessionalComponent', () => {
  let component: LoggedProfessionalComponent;
  let fixture: ComponentFixture<LoggedProfessionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggedProfessionalComponent]
    });
    fixture = TestBed.createComponent(LoggedProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
