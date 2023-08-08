import { DSDKServiceProxy } from './../../shared/service-proxies/service-proxies';
import { Component, Injector, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { DSDKDto } from '@shared/service-proxies/service-proxies';
import { an } from '@fullcalendar/core/internal-common';

@Component({
  templateUrl: './about.component.html',
  animations: [appModuleAnimation()],
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent extends AppComponentBase
  implements OnInit {

  shownLoginName = '';
  ShownLoginEmail = '';
  ShownLoginPhone = '';

  DSDKList$: Observable<DSDKDto[]>;

  constructor(
    injector: Injector,
    private authService: AppAuthService,
    private dsdk: DSDKServiceProxy,
  ) {
    super(injector);
  }
  

  currentLanguage: abp.localization.ILanguageInfo;
  fullName: string = '';
  authenticatedUserName$: Observable<string>;

  ngOnInit() {
    this.DSDKList$ = this.dsdk.getDSDK();
    this.shownLoginName = this.appSession.getShownLoginName();
    this.ShownLoginEmail = this.appSession.getShownLoginEmail();
    this.ShownLoginPhone = this.appSession.getShownLoginPhone();
  }

}
