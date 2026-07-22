import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab42 } from './lab4.2';

describe('Lab42', () => {
  let component: Lab42;
  let fixture: ComponentFixture<Lab42>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab42]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lab42);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
