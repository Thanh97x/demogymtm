import { AbpSessionService } from 'abp-ng2-module';
import { AppAuthService } from './../../shared/auth/app-auth.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private _authService: AppAuthService,
    private router: Router
  ) { }

  navigateIntroduce(event: Event) {
      event.preventDefault(); // Ngăn chặn sự kiện mặc định của liên kết
      this.router.navigateByUrl('/landingpage');
      
      setTimeout(() => {
          const gioithieuSection = document.getElementById("gioithieu");
          if (gioithieuSection) {
              gioithieuSection.scrollIntoView({ behavior: "smooth" });
          }
      }, 100); // Chờ 100ms trước khi cuộn xuống
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
