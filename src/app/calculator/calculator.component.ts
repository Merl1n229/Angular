import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  additionResult: number = 0; 
  subtractionResult: number = 0; 
  multiplicationResult: number = 0; 
  divisionResult: number = 0; 

  constructor(private calculatorService: CalculatorService) {}

  add() {
    this.additionResult = this.calculatorService.add(this.num1, this.num2);
  }

  subtract() {
    this.subtractionResult = this.calculatorService.subtract(this.num1, this.num2);
  }

  multiply() {
    this.multiplicationResult = this.calculatorService.multiply(this.num1, this.num2);
  }

  divide() {
    this.divisionResult = this.calculatorService.divide(this.num1, this.num2);
  }
}
