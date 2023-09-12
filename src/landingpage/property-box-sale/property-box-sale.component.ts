import {
  SaleServiceProxy,
  SaleDto,
} from "./../../shared/service-proxies/service-proxies";
import { Component, OnInit, OnDestroy, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-property-box-sale",
  templateUrl: "./property-box-sale.component.html",
  styleUrls: ["./property-box-sale.component.css"],
})
export class PropertyBoxSaleComponent implements OnInit, OnDestroy {
  targetDate: Date = new Date("2023-9-15"); // Set your target date here
  remainingTime: any;
  countdownInterval: any;

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = this.targetDate.getTime() - now;

      if (timeDifference <= 0) {
        this.stopCountdown();
        return;
      }

      this.remainingTime = {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
      };
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.countdownInterval);
  }

  newSale: SaleDto = new SaleDto();
  isRegistrationSuccess: boolean = false;
  isFormSubmitted: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private saleservice: SaleServiceProxy
  ) {}

  createSale() {
    if (this.newSale.address && this.newSale.address.trim() !== "") {
      this.saleservice.addAyns(this.newSale).subscribe(
        (res) => {
          console.log("thanh cong", res);
          this.isRegistrationSuccess = true;
          this.isFormSubmitted = true;
          this.newSale = new SaleDto();

          // Đặt thời gian chờ 5 giây trước khi ẩn thông báo
          setTimeout(() => {
            this.isRegistrationSuccess = false;
            this.isFormSubmitted = false;
          }, 5000);
        },
        (error) => {
          console.log("that bai", error);
          this.isRegistrationSuccess = false;
          this.isFormSubmitted = true;

          // Đặt thời gian chờ 5 giây trước khi ẩn thông báo thành công và thất bại
          setTimeout(() => {
            this.isRegistrationSuccess = false;
            this.isFormSubmitted = false;
          }, 5000);
        }
      );
    } else {
      this.isRegistrationSuccess = false;
      this.isFormSubmitted = true;

      setTimeout(() => {
        this.isRegistrationSuccess = false;
        this.isFormSubmitted = false;
      }, 5000);
    }
  }
}
