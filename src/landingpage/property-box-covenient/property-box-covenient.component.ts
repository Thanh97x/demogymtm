import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-property-box-covenient',
  templateUrl: './property-box-covenient.component.html',
  styleUrls: ['./property-box-covenient.component.css']
})
export class PropertyBoxCovenientComponent {
  constructor(
    private elementRef: ElementRef,
    private el: ElementRef
    ) { }

    zoomImage(event: MouseEvent) {
      const imgElement = event.target as HTMLImageElement;
      imgElement.style.transform = 'scale(1.4)';
    }
    
    // Hàm này sẽ reset kích thước ảnh khi hết hover
    resetImage(event: MouseEvent) {
      const imgElement = event.target as HTMLImageElement;
      imgElement.style.transform = 'scale(1)';
    }

  navigateToRegistration() {
    const propertyBoxSaleElement = document.getElementById("BoxSale");
    propertyBoxSaleElement.scrollIntoView({ behavior: 'smooth' });
  }
}
