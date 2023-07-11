import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  constructor(private elementRef: ElementRef) { }

  navigateToRegistration() {
    const propertyBoxSaleElement = document.getElementById("BoxSale");
    // debugger
    // console.log(propertyBoxSaleElement)
    propertyBoxSaleElement.scrollIntoView({ behavior: 'smooth' });
  }

}
