import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-property-gym-address',
  templateUrl: './property-gym-address.component.html',
  styleUrls: ['./property-gym-address.component.css']
})
export class PropertyGymAddressComponent {

  constructor(private elementRef: ElementRef) { }

  navigateToRegistration() {
    const propertyBoxSaleElement = document.getElementById("BoxSale");
    // debugger
    // console.log(propertyBoxSaleElement)
    propertyBoxSaleElement.scrollIntoView({ behavior: 'smooth' });
  }
}

