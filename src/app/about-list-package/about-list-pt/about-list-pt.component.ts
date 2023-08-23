import { AppSessionService } from './../../../shared/session/app-session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DSDKServiceProxy, DSDKDto } from './../../../shared/service-proxies/service-proxies';
import { Component } from '@angular/core';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-about-list-pt',
  templateUrl: './about-list-pt.component.html',
  styleUrls: ['./about-list-pt.component.scss'],
  providers: [MessageService],
})
export class AboutListPtComponent {

  newDSDK: DSDKDto = new  DSDKDto();
  showConfirmationPopup = false;
  selectedPackage: any;
  selectedPackageType: string;
  showNotification = false;
  notificationMessage = '';
  shownLoginName = '';

  ListPT1: any = [{
    goiTapId:1, tenGoi: "Gói PT 1 kèm 1",soThang:'1 tháng' ,tongTien: 3000000 ,service:'Mỗi buổi 90 phút, lớp từ 6 - 8 học viên'
  },]
  ListPT6: any = [
    {
    goiTapId:1, tenGoi: "Gói PT 1 kèm 1",soThang:'6 tháng', tongTien: 1699999 ,service:'Mỗi buổi 90 phút, lớp từ 6 - 8 học viên'
  },]
  ListPT12: any = [
 {
    goiTapId:1, tenGoi: "Gói PT 1 kèm 1",soThang:'12 tháng', tongTien: 2999999 ,service:'Mỗi buổi 90 phút, lớp từ 6 - 8 học viên'
  },]
  
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
    this.addSingle();
    console.log(this.newDSDK)
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

    getDSDK(): void {
      this.dsdk.getDSDK().subscribe((result) => {
        this.newDSDK = new DSDKDto;
      });
    }
    ngOnInit() {
      this.shownLoginName = this.appSession.getShownLoginName();
    }
}
