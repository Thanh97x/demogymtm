import {
  CTGoiTapDto,
  CTGoiTapServiceProxy,
  DSDKDto,
  GoiTapDto,
  GoiTapServiceProxy,
} from "./../../../shared/service-proxies/service-proxies";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DSDKServiceProxy } from "@shared/service-proxies/service-proxies";
import { MessageService } from "primeng/api";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Message } from "primeng/api";
import { AppSessionService } from "@shared/session/app-session.service";
import { result } from "lodash-es";
import QRCode from "qrcode";

@Component({
  selector: "app-about-list-zumba",
  templateUrl: "./about-list-zumba.component.html",
  styleUrls: ["./about-list-zumba.component.scss"],
  providers: [MessageService],
})
export class AboutListZumbaComponent implements OnInit {
  showConfirmationPopup = false;
  selectedPackage: any;
  selectedPackageType: string;
  newDSDK: DSDKDto = new DSDKDto();
  showNotification = false;
  notificationMessage = "";
  shownLoginName = "";
  idgoi: any;
  ListZumbaYoga: any;
  ListGoiTap: any;
  goiTapList: GoiTapDto[] = [];
  qrData =
    "https://www.facebook.com/pages/GYM-Tuy%E1%BA%BFt-Mai/1731153260487067"; // Dữ liệu bạn muốn chuyển thành mã QR
  qrImageUrl: string;

  constructor(
    private dsdk: DSDKServiceProxy,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private appSession: AppSessionService,
    private ctGoiTap: CTGoiTapServiceProxy,
    private goiTapService: GoiTapServiceProxy
  ) {}

  confirmSignUp(selectedPackage: any, selectedPackageType: string) {
    this.selectedPackage = selectedPackage;
    this.selectedPackageType = selectedPackageType;
    this.showConfirmationPopup = true;
    // this.selectedPackage = goiTap;
    // this.selectedPackage = soThang;
  }

  cancelSignUp() {
    this.selectedPackage = null;
    this.selectedPackageType = "";
    this.showConfirmationPopup = false;
  }
  //create
  createDSDK(selectedPackage: any) {
    this.newDSDK.name = this.shownLoginName;
    this.newDSDK.soThang = selectedPackage.goiThang;
    this.newDSDK.goiTapId = selectedPackage.goiTapId;
    this.newDSDK.tongTien = selectedPackage.mucGia;
    this.newDSDK.dataTongTien = selectedPackage.kieuGia;

    // Gọi dịch vụ để lấy thông tin tenGoiTap
    this.goiTapService
      .getGoiTapById(selectedPackage.goiTapId)
      .subscribe((goiTapArray) => {
        if (goiTapArray.length > 0) {
          const goiTap = goiTapArray[0];

          this.newDSDK.tenGoi = goiTap.tenGoiTap;
          this.addSingle();
          const selectedPackageFromList = this.ListZumbaYoga.find(
            (item: CTGoiTapDto) => item.goiTapId === selectedPackage.goiTapId
          );
          if (selectedPackageFromList) {
            this.dsdk.addDSDK(this.newDSDK).subscribe((res) => {
              console.log(res);
              this.newDSDK = new DSDKDto();

              // Chuyển hướng sau một khoảng thời gian
              setTimeout(() => {
                this.router.navigate(["/app/about"]);
              }, 2000);
            });
          }
        }
      });
  }

  addSingle() {
    this.messageService.add({
      severity: "success",
      summary: "Thành Công!",
      detail: "Trải nghiêm ngay thôi nào",
    });
  }
  //getall
  getDSDK(): void {
    this.dsdk.getDSDK().subscribe((result) => {
      this.newDSDK = new DSDKDto();
    });
  }
  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.idgoi = +param["idgoi"];
    });
    this.shownLoginName = this.appSession.getShownLoginName();
    this.ctGoiTap.getCTGoiTapById(this.idgoi).subscribe((res) => {
      this.ListZumbaYoga = res;
      console.log("a", res);
    });
    this.goiTapService.getGoiTapById(this.idgoi).subscribe((result) => {
      this.ListGoiTap = result;
      console.log("b", result);
    });
    QRCode.toDataURL(this.qrData, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }
      this.qrImageUrl = url;
    });
  }
}
