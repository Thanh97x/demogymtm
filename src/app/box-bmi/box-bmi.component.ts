import { Component } from '@angular/core';

@Component({
  selector: 'app-box-bmi',
  templateUrl: './box-bmi.component.html',
  styleUrls: ['./box-bmi.component.scss']
})
export class BoxBmiComponent {

  height: number = 100;
  weight: number = 55;
  bmi: number = 0;

  calculatorBmi(){
    const heightMetes = this.height / 100;
    this.bmi = parseFloat((this.weight / (heightMetes  * heightMetes)).toFixed(2));
  }
}
