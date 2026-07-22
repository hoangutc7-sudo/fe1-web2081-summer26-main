import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab41 } from './lab4.1';

describe('Lab41', () => {
  let component: Lab41;
  let fixture: ComponentFixture<Lab41>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab41]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lab41);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
