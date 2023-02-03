import {Component, OnInit} from '@angular/core';
import {Calculator} from "../../model/calculator";


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculator: Calculator = {operator: "+"};

  constructor() {
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  calculate(target: any) {
    switch (this.calculator.operator) {
      case "+":
        this.calculator.result = parseInt(String(this.calculator.fistNumber)) + parseInt(String(this.calculator.secondNumber));
        break;
      case "-":
        this.calculator.result = parseInt(String(this.calculator.fistNumber)) - parseInt(String(this.calculator.secondNumber));
        break;
      case "*":
        this.calculator.result = parseInt(String(this.calculator.fistNumber)) * parseInt(String(this.calculator.secondNumber));
        break;
      case "/":
        if (parseInt(String(this.calculator.secondNumber)) == 0) {
          this.calculator.result = "Error"
          break;
        } else {
          this.calculator.result = parseInt(String(this.calculator.fistNumber)) / parseInt(String(this.calculator.secondNumber));
          break;
        }

    }
    return this.calculator.result;
    this.calculator.fistNumber;

  }
}
