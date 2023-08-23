import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);
@Component({
  selector: 'app-infor-hlv',
  templateUrl: './infor-hlv.component.html',
  styleUrls: ['./infor-hlv.component.scss']
})
export class InforHlvComponent {
  navigateCoachhvl(event: Event) {
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
