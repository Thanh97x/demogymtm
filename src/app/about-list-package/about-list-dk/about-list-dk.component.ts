import { Router, ActivatedRoute } from '@angular/router';
import { DSDKServiceProxy, DSDKDto } from './../../../shared/service-proxies/service-proxies';
import { Component } from '@angular/core';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-about-list-dk',
  templateUrl: './about-list-dk.component.html',
  styleUrls: ['./about-list-dk.component.scss'],
  providers: [MessageService],
})
export class AboutListDkComponent {

  newDSDK: DSDKDto = new  DSDKDto();
  showConfirmationPopup = false;
  selectedPackage: any;
  selectedPackageType: string;
  showNotification = false;
  notificationMessage = '';

  ListDK1: any = [{
    goiTapId:1, tenGoi: "Gói Đoàn Kết",soThang:'1 tháng' ,tongTien: 1000000 ,service:'Mỗi buổi 90 phút, lớp từ 6 - 8 học viên'
  },]
  ListDK6: any = [
    {
    goiTapId:1, tenGoi: "Gói Đoàn Kết",soThang:'6 tháng', tongTien: 5600000 ,service:'Mỗi buổi 90 phút, lớp từ 6 - 8 học viên'
  },]
  ListDK12: any = [
 {
    goiTapId:1, tenGoi: "Gói Đoàn Kết",soThang:'12 tháng', tongTien: 10000000 ,service:'Mỗi buổi 90 phút, lớp từ 6 - 8 học viên'
  },]
  
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
  addSingle() {
    this.messageService.add({severity:'success', summary:'Thành Công!', detail:'Trải nghiêm ngay thôi nào'});
  }

  //create
  createDSDK(item){
    this.newDSDK.soThang =  item.soThang;
    this.newDSDK.goiTapId = item.goiTapId;
    this.newDSDK.tenGoi = item.tenGoi;
    this.newDSDK.tongTien = item.tongTien;
    this.addSingle();
    console.log(this.newDSDK)
    this.dsdk.addDSDK(item).subscribe((res)=> {
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
}
