import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-property-box-covenient',
  templateUrl: './property-box-covenient.component.html',
  styleUrls: ['./property-box-covenient.component.css']
})
export class PropertyBoxCovenientComponent {
  constructor(private elementRef: ElementRef) { }

  navigateToRegistration() {
    const propertyBoxSaleElement = document.getElementById("BoxSale");
    propertyBoxSaleElement.scrollIntoView({ behavior: 'smooth' });
  }
}
