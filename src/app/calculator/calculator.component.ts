import { Component,HostListener } from '@angular/core';
import { APIServices } from '../api.services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display = "";
  operators = ['+', '-', '*', '/', '%']
  
  constructor(private http: HttpClient) { }
  API = new APIServices(this.http);
  runEvaluator(): void {
    this.API.evaluate(this.display).subscribe((data) => {
     this.display = data.result.toString();
     console.log(data);
   });
   }

  // Handling Button Clicks
  KeypadClicked(value: string) {
    if (value === 'C' || value === 'Backspace') {
      this.display = this.display.slice(0, -1)
    } else if (value == 'switch_sign') {
      const recentPlus = this.display.lastIndexOf('+')
      const recentMinus =  this.display.lastIndexOf('-')
      if (recentPlus == -1 && recentMinus == -1) {
        this.display = '-' + this.display
      } else if (recentPlus > recentMinus){
        this.display = this.display.slice(0, recentPlus) + '-' + this.display.slice(recentPlus+1)
      } else {
        this.display = this.display.slice(0, recentMinus) + '+' + this.display.slice(recentMinus+1)
      }
    } else if (this.operators.includes(value) && this.operators.includes(this.display.charAt(-1))) {
      return
    } else if (value == '=' || value == 'Enter') {
      this.runEvaluator();
    } else if (value == 'CLEAR' || value == 'Escape') {
      this.display = ""
    } else {
      this.display = this.display + value;
    }
    if (this.operators.includes(this.display.charAt(0)) && this.display.charAt(0) != '-') {
      this.display = this.display.slice(1)
    }
  }

  // Handling Keyboard Presses
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const allowed_keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', 'Backspace', 'Enter', 'Escape']
    if (allowed_keys.includes(event.key)) {
      this.KeypadClicked(event.key)
    }
  }

}
