import { AppSessionService } from './../../../shared/session/app-session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DSDKServiceProxy, DSDKDto } from './../../../shared/service-proxies/service-proxies';
import { Component } from '@angular/core';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-about-list-tt',
  templateUrl: './about-list-tt.component.html',
  styleUrls: ['./about-list-tt.component.scss'],
  providers: [MessageService],

})
export class AboutListTtComponent {
  newDSDK: DSDKDto = new  DSDKDto();
  showConfirmationPopup = false;
  selectedPackage: any;
    selectedPackageType: string;
  showNotification = false;
  notificationMessage = '';
  shownLoginName = '';

  ListTT1: any = [{
    goiTapId:1, tenGoi: "Gói Tự Tập",soThang:'1 tháng' ,tongTien: 500000,service:'Tập luyện không giới hạn thời gian'
  },]
  ListTT6: any = [
    {
    goiTapId:1, tenGoi: "Gói Tự Tập",soThang:'6 tháng', tongTien: 2800000,service:'Tập luyện không giới hạn thời gian'
  },
  ]
  ListTT12: any = [
 {
    goiTapId:1, tenGoi: "Gói Tự Tập",soThang:'12 tháng', tongTien:5000000,service:'Tập luyện không giới hạn thời gian'
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
  addSingle() {
    this.messageService.add({severity:'success', summary:'Thành Công!', detail:'Trải nghiêm ngay thôi nào'});
  }
  //create
  createDSDK(selectedPackage: any){
    this.newDSDK.name = this.shownLoginName;
    this.newDSDK.soThang =  selectedPackage.soThang;
    this.newDSDK.goiTapId = selectedPackage.goiTapId;
    this.newDSDK.tenGoi = selectedPackage.tenGoi;
    this.newDSDK.tongTien = selectedPackage.tongTien;
    console.log(this.newDSDK)
    this.addSingle();
    this.dsdk.addDSDK(this.newDSDK).subscribe((res)=> {
      console.log(res)
      setTimeout(() => {
        setTimeout(() => {
            this.router.navigate(['/app/about']);
        }, );
    }, 2000);
      this.newDSDK = new DSDKDto();
      
    })
  }
  ngOnInit() {
    this.shownLoginName = this.appSession.getShownLoginName();
  }
  
}
