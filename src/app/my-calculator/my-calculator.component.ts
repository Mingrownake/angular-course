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
  public operations: string[] = ['+', '-', '*', '/', 'sin', 'cos', 'pow'];
  public history: string[] = [];
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
          if (this.secondOperand != 0) {
            this.result = this.firstOperand / this.secondOperand;
          }
          break;
        } case 'cos': {
          this.result = Math.cos(this.firstOperand);
          break;
        } case 'sin': {
          this.result = Math.sin(this.firstOperand);
          break;
        } case 'pow': {
          this.result = Math.pow(this.firstOperand, this.secondOperand);
          break;
        }
      }
      this.writeOperation(this.firstOperand, this.secondOperand, this.result, this.selectOperation);
      this.firstOperand = 0;
      this.secondOperand = 0;
    }
  }

  private writeOperation(first: number, second: number, result: number | undefined, operation: string): void {
    if (this.history.length >= 5) {
      this.history.shift();
    }
    if (['sin', 'cos'].includes(operation)) {
      this.history.push(`${operation}${first} = ${result}`)
    } else {
      this.history.push(`${first} ${operation} ${second} = ${result}`);
    }

  }

  public isOrdinaryOperations(): boolean {
    return ['sin', 'cos'].includes(this.selectOperation);
  }
}
