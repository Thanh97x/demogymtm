import { Component } from '@angular/core';

@Component({
  selector: 'app-infor-hlv2',
  templateUrl: './infor-hlv2.component.html',
  styleUrls: ['./infor-hlv2.component.scss']
})
export class InforHlv2Component {
  navigateCoachhvl2(event: Event) {

    event.preventDefault();
    const element = document.getElementById('cb-review-title');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  ratingVal: number = 4; // Giá trị mặc định của đánh giá

  ratingChanged(event: any) {
    console.log('Rating changed:', event);
    // Xử lý sự kiện khi giá trị đánh giá thay đổi
  }
}
