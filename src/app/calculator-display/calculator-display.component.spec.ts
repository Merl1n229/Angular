import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorDisplayComponent } from './calculator-display.component';

describe('CalculatorDisplayComponent', () => {
  let component: CalculatorDisplayComponent;
  let fixture: ComponentFixture<CalculatorDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorDisplayComponent]
    });
    fixture = TestBed.createComponent(CalculatorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
