import { Component, OnInit } from '@angular/core';
import { GoiTapServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-property-box-gym',
  templateUrl: './property-box-gym.component.html',
  styleUrls: ['./property-box-gym.component.css']
})
export class PropertyBoxGymComponent implements OnInit {
ListGoiTap: any

constructor(
  private goiTap: GoiTapServiceProxy
){}

ngOnInit(): void {
  this.goiTap.getGoiTap().subscribe((res)=> {
    this.ListGoiTap = res;
    // console.log('1',res)
  })
}
}
