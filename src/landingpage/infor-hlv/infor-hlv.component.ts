import { Component } from '@angular/core';

@Component({
  selector: 'app-infor-hlv',
  templateUrl: './infor-hlv.component.html',
  styleUrls: ['./infor-hlv.component.scss']
})
export class InforHlvComponent {
  navigateCoachhvl() {
    const InforhvlElement = document.getElementById("cb-review-title")
    InforhvlElement.scrollIntoView({ behavior: "smooth" })
  }
}
