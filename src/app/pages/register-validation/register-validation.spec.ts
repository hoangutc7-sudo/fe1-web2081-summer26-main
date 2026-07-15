import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterValidation } from './register-validation';

describe('RegisterValidation', () => {
  let component: RegisterValidation;
  let fixture: ComponentFixture<RegisterValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterValidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
