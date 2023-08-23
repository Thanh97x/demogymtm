import { DSDKDto } from './../../../shared/service-proxies/service-proxies';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DSDKServiceProxy } from '@shared/service-proxies/service-proxies';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/api';
import { AppSessionService } from '@shared/session/app-session.service';

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
  shownLoginName = '';

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
    private route: ActivatedRoute,
    private appSession: AppSessionService,
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
  createDSDK(selectedPackage: any) {
    this.newDSDK.name = this.shownLoginName;
    this.newDSDK.soThang = selectedPackage.soThang;
    this.newDSDK.goiTapId = selectedPackage.goiTapId;
    this.newDSDK.tenGoi = selectedPackage.tenGoi;
    this.newDSDK.tongTien = selectedPackage.tongTien;
    
    this.addSingle();

    this.dsdk.addDSDK(this.newDSDK).subscribe((res) => {
        console.log(res);
        this.newDSDK = new DSDKDto();

        // Navigate after a delay
        setTimeout(() => {
            this.router.navigate(['/app/about']);
        }, 2000);
    });
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
  ngOnInit() {
    this.shownLoginName = this.appSession.getShownLoginName();
  }
}
