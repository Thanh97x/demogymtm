import { result } from 'lodash-es';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DSDKDto, GoiTapServiceProxy } from './../../shared/service-proxies/service-proxies';
import { DSDKServiceProxy } from '@shared/service-proxies/service-proxies';
import * as moment from 'moment';

@Component({
  selector: 'app-about-giahan',
  templateUrl: './about-giahan.component.html',
  styleUrls: ['./about-giahan.component.scss']
})
export class AboutGiahanComponent implements OnInit {
  newDSDK: DSDKDto = new DSDKDto();
  
  ListGoiTap: any 
  // ListGoiTap: any = [{
  //   goiTapId:1, tenGoi: "Gói Zumba và Yoga", tongTien:450000,service:'Yoga - Group Fitness và tư vấn dinh dưỡng không giới hạn',ca:"Mỗi ca 10 - 15 học viên"
  // },
  // {
  //   goiTapId:2, tenGoi: "Gói Tự Tập", tongTien:500000,service:'Yoga - Group Fitness và tư vấn dinh dưỡng không giới hạn',ca:"Mỗi ca 10 - 15 học viên"
  // }]
  constructor(
    private dsdk: DSDKServiceProxy, 
    private goitap: GoiTapServiceProxy,
    private route:ActivatedRoute
    
  ){}
   addRealMonth (d) {
    var fm = moment(d).add(1, 'M');
    var fmEnd = moment(fm).endOf('month');
    return d.date() != fm.date() && fm.isSame(fmEnd.format('YYYY-MM-DD')) ? fm.add(1, 'd') : fm;  
  }
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

  ngOnInit(): void {
    this.goitap.getGoiTap().subscribe((result)=>{
    this.ListGoiTap=result
    })
    
  }
  
}
