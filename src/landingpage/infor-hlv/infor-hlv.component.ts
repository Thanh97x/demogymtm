import { element } from 'protractor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-infor-hlv',
  templateUrl: './infor-hlv.component.html',
  styleUrls: ['./infor-hlv.component.scss']
})
export class InforHlvComponent {
  navigateCoachhvl(event: Event) {

    event.preventDefault();
    const element = document.getElementById('cb-review-title');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  value!: number;
}
