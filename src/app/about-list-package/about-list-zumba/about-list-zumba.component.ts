import { DSDKDto } from './../../../shared/service-proxies/service-proxies';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DSDKServiceProxy } from '@shared/service-proxies/service-proxies';
import * as moment from 'moment';

@Component({
  selector: 'app-about-list-zumba',
  templateUrl: './about-list-zumba.component.html',
  styleUrls: ['./about-list-zumba.component.scss']
})
export class AboutListZumbaComponent {
  newDSDK: DSDKDto = new  DSDKDto();
  ListZumbaYoga: any = [{
    goiTapId:1, tenGoi: "Gói Zumba và Yoga" ,tongTien:450000,service:'Yoga - Group Fitness và tư vấn dinh dưỡng không giới hạn',ca:"Mỗi ca 10 - 15 học viên"
  },]
  // {
  //   goiTapId:1, tenGoi: "Gói Zumba và Yoga", tongTien:2500000,service:'Yoga - Group Fitness và tư vấn dinh dưỡng không giới hạn',ca:"Mỗi ca 10 - 15 học viên"
  // },
  // {
  //   goiTapId:1, tenGoi: "Gói Zumba và Yoga", tongTien:4500000,service:'Yoga - Group Fitness và tư vấn dinh dưỡng không giới hạn',ca:"Mỗi ca 10 - 15 học viên"
  // },
  
  constructor(
    private dsdk: DSDKServiceProxy, 
    
  ){}

  //create
  createDSDK(item){
    // this.newDSDK = item;
    let date = new Date();
    let formattedDate  = moment(date).format('YYYY-DD-MMTHH:mm:ss.000');
    const ngayHetHan = moment().add(1, 'months');
    this.newDSDK.ngayDangKy =  moment();
    this.newDSDK.ngayHetHan =  ngayHetHan;
    this.newDSDK.goiTapId = item.goiTapId;
    this.newDSDK.tenGoi = item.tenGoi;
    this.newDSDK.tongTien = item.tongTien;
    console.log(this.newDSDK)
    this.dsdk.addDSDK(item).subscribe((res)=> {
      console.log(res)
      this.newDSDK = new DSDKDto();
    })
  }

  //getall
  getDSDK(): void {
    this.dsdk.getDSDK().subscribe((result) => {
      this.newDSDK = new DSDKDto;
    });
  }
}
