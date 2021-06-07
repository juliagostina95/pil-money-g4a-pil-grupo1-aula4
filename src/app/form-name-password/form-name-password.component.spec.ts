import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNamePasswordComponent } from './form-name-password.component';

describe('FormNamePasswordComponent', () => {
  let component: FormNamePasswordComponent;
  let fixture: ComponentFixture<FormNamePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNamePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNamePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
