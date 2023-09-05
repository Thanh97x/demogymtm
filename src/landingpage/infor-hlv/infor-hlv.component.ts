import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { IntroPtServiceProxy } from '@shared/service-proxies/service-proxies';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);
@Component({
  selector: 'app-infor-hlv',
  templateUrl: './infor-hlv.component.html',
  styleUrls: ['./infor-hlv.component.scss']
})
export class InforHlvComponent implements OnInit {
  namePt: any;
  ListPtGym: any;

  constructor(
    private route: ActivatedRoute,
    private introPt: IntroPtServiceProxy,
  ){}
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
  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      this.namePt=+param["namePt"];
    })
    this.introPt.getIntroPtById(this.namePt)
    .subscribe
    ((res)=> {
      this.ListPtGym = res
      console.log('a',res)
    })
  }
}
