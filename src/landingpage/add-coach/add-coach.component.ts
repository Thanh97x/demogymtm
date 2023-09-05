import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IntroPtServiceProxy, PtGymServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-add-coach',
  templateUrl: './add-coach.component.html',
  styleUrls: ['./add-coach.component.css']
})
export class AddCoachComponent implements OnInit {
  ListPtGym: any
  ListPt: any
  namePt: any
  ratingVal: number = 4; // Giá trị mặc định của đánh giá

  constructor(
    private route: ActivatedRoute,
    private ptGym: PtGymServiceProxy,
    private introPt: IntroPtServiceProxy,
  ){}

  ratingChanged(event: any) {
    console.log('Rating changed:', event);
    // Xử lý sự kiện khi giá trị đánh giá thay đổi
  }

  ngOnInit(): void {
    this.ptGym.getPtGym().subscribe((res)=> {
      this.ListPt = res
    })
  }
}
