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
