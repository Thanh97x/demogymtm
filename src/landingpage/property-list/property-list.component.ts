import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  constructor(
    private elementRef: ElementRef,
    private el: ElementRef
    ) { }
 // Hàm này sẽ thực hiện việc zoom khi hover
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
    // debugger
    // console.log(propertyBoxSaleElement)
    propertyBoxSaleElement.scrollIntoView({ behavior: 'smooth' });
  }

}
