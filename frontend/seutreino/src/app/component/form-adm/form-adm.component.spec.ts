import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdmComponent } from './form-adm.component';

describe('FormAdmComponent', () => {
  let component: FormAdmComponent;
  let fixture: ComponentFixture<FormAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAdmComponent]
    });
    fixture = TestBed.createComponent(FormAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
