import { Component } from '@angular/core';

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss'
})
export class MyCalculatorComponent {
  public firstOperand: number = 0;
  public secondOperand: number = 0;
  public selectOperation: string = '+';
  public operations: string[] = ['+', '-', '*', '/'];
  public result: number | undefined = undefined;
  public calc() {
    if (this.firstOperand !== undefined && this.secondOperand !== undefined) {
      switch(this.selectOperation) {
        case '+': {
          this.result = this.firstOperand + this.secondOperand;
          break;
        } case '-': {
          this.result = this.firstOperand - this.secondOperand;
          break;
        } case '*': {
          this.result = this.firstOperand * this.secondOperand;
          break;
        } case '/': {
          this.result = this.firstOperand / this.secondOperand;
          break;
        }
      }
    }
  }
}
