import { AbpSessionService } from 'abp-ng2-module';
import { AppAuthService } from './../../shared/auth/app-auth.service';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.scss']
})
export class PageMenuComponent implements OnInit {
  isLoggedin = false;
  submitting = false;
  tenTaiKhoan = ''; 
  constructor(
    private elementRef: ElementRef,
    private authService: AppAuthService,
    private _sessionService: AbpSessionService,
    private _authService: AppAuthService
    ) { }

  navigateIntroduce() {
    const PropertyListElement = document.getElementById("gioithieu")
    PropertyListElement.scrollIntoView({ behavior: "smooth" })
  }

  navigateHome() {
    const PropertycardElement = document.getElementById("home")
    PropertycardElement.scrollIntoView({ behavior: "smooth" })
  }

  navigateToLogin() {
    const loginElement = document.getElementById("login")
    loginElement.scrollIntoView({ behavior: "smooth" })
  }


  ngOnInit(): void {
    if (this._sessionService.userId) {
      this.isLoggedin = true;
    }
  }

  logout(): void {
    this._authService.logout();
    this.isLoggedin = false;
  }

}
