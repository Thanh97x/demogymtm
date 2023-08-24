import { Router } from '@angular/router';
import { SocialUser, FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, Injector, OnInit } from '@angular/core';
import { AbpSessionService } from 'abp-ng2-module';
import { AppComponentBase } from '@shared/app-component-base';
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var FB: any;
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [accountModuleAnimation()]
})
export class LoginComponent extends AppComponentBase implements OnInit {
  [x: string]: any;
  submitting = false;
  //name
  tenTaiKhoan: string = '';
  //login
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;

  constructor(
    injector: Injector,
    public authService: AppAuthService,
    private _sessionService: AbpSessionService,
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {
    super(injector);
  }

  get multiTenancySideIsTeanant(): boolean {
    return this._sessionService.tenantId > 0;
  }

  get isSelfRegistrationAllowed(): boolean {

    if (!this._sessionService.tenantId) {
      return false;
    }

    return true;
  }

  login(): void {
    this.submitting = true;
    this.authService.authenticate(() => {
      this.submitting = false;
      this.authService.setAuthenticatedUserName(this.authService.authenticateModel.userNameOrEmailAddress);
    });
  }

  //login facebook
  loginWithFacebook(): void {

    this.submitting = true;
    this.authService.setAuthenticatedUserName(this.authService.authenticateModel.userNameOrEmailAddress);
    this.authService.authenticate(() => {
      this.submitting = false;
      this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
        if(user) {
          this.isLoggedin = true;
        }else{
          console.log('Login failed');
        }
      });
    });
   
  }
  
  submitLogin() {
    console.log("submit login to facebook");
    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        this.toastr.successToastr('Đăng nhập thành công', 'Thành công!');
      } else {
        console.log('Đăng nhập thất bại');
      }
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
    });
  }

  
  signOut(): void {
    this.socialAuthService.signOut();
  }
  
}
