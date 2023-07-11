import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-box-sale',
  templateUrl: './property-box-sale.component.html',
  styleUrls: ['./property-box-sale.component.css']
})
export class PropertyBoxSaleComponent implements OnInit, OnDestroy {

  targetDate: Date = new Date('2023-7-30'); // Set your target date here
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

      this.remainingTime = {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDifference % (1000 * 60)) / 1000)
      };

      if (timeDifference <= 0) {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.countdownInterval);
  }

  constructor(private elementRef: ElementRef) { }

  // navigateToRegistration() {
  //   const propertyBoxSaleElement = this.elementRef.nativeElement.querySelector('#khuyen_mai');
  //   propertyBoxSaleElement.scrollIntoView({ behavior: 'smooth' });
  // }

}
