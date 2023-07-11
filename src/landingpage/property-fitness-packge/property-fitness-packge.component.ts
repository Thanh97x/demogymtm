import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-property-fitness-packge',
  templateUrl: './property-fitness-packge.component.html',
  styleUrls: ['./property-fitness-packge.component.css']
})
export class PropertyFitnessPackgeComponent {
  constructor(private elementRef: ElementRef) { }

  navigateToRegistration() {
    const propertyBoxSaleElement = document.getElementById("BoxSale");
    // debugger
    // console.log(propertyBoxSaleElement)
    propertyBoxSaleElement.scrollIntoView({ behavior: 'smooth' });
  }
}
