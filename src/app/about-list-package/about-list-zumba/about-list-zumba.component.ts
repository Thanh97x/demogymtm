import { DSDKDto } from './../../../shared/service-proxies/service-proxies';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DSDKServiceProxy } from '@shared/service-proxies/service-proxies';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-list-zumba',
  templateUrl: './about-list-zumba.component.html',
  styleUrls: ['./about-list-zumba.component.scss'],
  providers: [MessageService],
})
export class AboutListZumbaComponent {
  showConfirmationPopup = false;
  selectedPackage: any;
    selectedPackageType: string;
  newDSDK: DSDKDto = new  DSDKDto();
  showNotification = false;
  notificationMessage = '';

  ListZumbaYoga: any = [{
    goiTapId:1, tenGoi: "Gói Zumba và Yoga",soThang:'1 tháng' ,tongTien: 450000,service:'Yoga - Group Fitness và tư vấn dinh dưỡng không giới hạn',ca:"Mỗi ca 10 - 15 học viên"
  },]
  ListZumbaYoga6: any = [
    {
    goiTapId:1, tenGoi: "Gói Zumba và Yoga",soThang:'6 tháng', tongTien: 2500000,service:'Yoga - Group Fitness và tư vấn dinh dưỡng không giới hạn',ca:"Mỗi ca 10 - 15 học viên"
  },
  ]
  ListZumbaYoga12: any = [
 {
    goiTapId:1, tenGoi: "Gói Zumba và Yoga",soThang:'12 tháng', tongTien:4500000,service:'Yoga - Group Fitness và tư vấn dinh dưỡng không giới hạn',ca:"Mỗi ca 10 - 15 học viên"
  },
  ]
 
  constructor(
    private dsdk: DSDKServiceProxy, 
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  
  confirmSignUp(selectedPackage: any, selectedPackageType: string) {
    this.selectedPackage = selectedPackage;
    this.selectedPackageType = selectedPackageType;
    this.showConfirmationPopup = true;
}

cancelSignUp() {
    this.selectedPackage = null;
    this.selectedPackageType = '';
    this.showConfirmationPopup = false;
}
  //create
  createDSDK(item){
    this.newDSDK.soThang =  item.soThang;
    this.newDSDK.goiTapId = item.goiTapId;
    this.newDSDK.tenGoi = item.tenGoi;
    this.newDSDK.tongTien = item.tongTien;
    console.log('thanh cong')
    this.addSingle();
    this.dsdk.addDSDK(item).subscribe((res)=> {
      console.log(res)
      this.newDSDK = new DSDKDto();
      // Ẩn thông báo sau 3 giây
      setTimeout(() => {
        setTimeout(() => {
            this.router.navigate(['/app/about']);
        }, );
    }, 2000);
      this.newDSDK = new DSDKDto();
    })
  }

    addSingle() {
      this.messageService.add({severity:'success', summary:'Thành Công!', detail:'Trải nghiêm ngay thôi nào'});
  }
  //getall
  getDSDK(): void {
    this.dsdk.getDSDK().subscribe((result) => {
      this.newDSDK = new DSDKDto;
    });
  }
}
