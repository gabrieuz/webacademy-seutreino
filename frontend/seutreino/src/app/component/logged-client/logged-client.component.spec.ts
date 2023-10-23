import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedClientComponent } from './logged-client.component';

describe('LoggedClientComponent', () => {
  let component: LoggedClientComponent;
  let fixture: ComponentFixture<LoggedClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggedClientComponent]
    });
    fixture = TestBed.createComponent(LoggedClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
