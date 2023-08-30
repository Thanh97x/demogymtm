import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-property-gym-address',
  templateUrl: './property-gym-address.component.html',
  styleUrls: ['./property-gym-address.component.css']
})
export class PropertyGymAddressComponent {

  constructor(private elementRef: ElementRef) { }

  navigateToRegistration() {
    // const propertyBoxSaleElement = document.getElementById("BoxSale");
    // propertyBoxSaleElement.scrollIntoView({ behavior: 'smooth' });
      const boxSaleElement = document.getElementById('BoxSale');
      
      if (boxSaleElement) {
        const marginToApply = 32; // Độ dời margin-top mong muốn (đơn vị pixel)
        const boxSaleRect = boxSaleElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollOffset = window.scrollY || window.pageYOffset;
        
        // Tính toán vị trí cuối cùng cần cuộn đến
        const destination = boxSaleRect.top + scrollOffset + (boxSaleRect.height - windowHeight) / 2 - marginToApply;
        
        window.scrollTo({
          top: destination,
          behavior: 'smooth'
        });
      }
    }
}

