import { Component } from '@angular/core';

@Component({
  selector: 'app-add-coach',
  templateUrl: './add-coach.component.html',
  styleUrls: ['./add-coach.component.css']
})
export class AddCoachComponent {
  ratingVal: number = 4; // Giá trị mặc định của đánh giá

  ratingChanged(event: any) {
    console.log('Rating changed:', event);
    // Xử lý sự kiện khi giá trị đánh giá thay đổi
  }
}
