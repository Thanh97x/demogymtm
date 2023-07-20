import { Component, Injector, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { Observable } from 'rxjs/internal/Observable';

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

  constructor(
    injector: Injector,
    private authService: AppAuthService,

  ) {
    super(injector);

  }

  currentLanguage: abp.localization.ILanguageInfo;
  fullName: string = '';
  authenticatedUserName$: Observable<string>;

  ngOnInit(): void {
    // this.authenticatedUserName$ = this.authService.getAuthenticatedUserName();
    this.shownLoginName = this.appSession.getShownLoginName();
    this.ShownLoginEmail = this.appSession.getShownLoginEmail();

  }

}
