import { Component, ElementRef, OnInit } from '@angular/core';
import { AiCanTapServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-property-fitness-packge',
  templateUrl: './property-fitness-packge.component.html',
  styleUrls: ['./property-fitness-packge.component.css']
})
export class PropertyFitnessPackgeComponent implements OnInit {
  ListAiCanTap: any
  constructor(
    private elementRef: ElementRef,
    private el: ElementRef,
    private aiCantap: AiCanTapServiceProxy,
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

  ngOnInit(): void {
    this.aiCantap.getAiCanTap().subscribe((res)=> {
      this.ListAiCanTap = res
    })
  }
}
