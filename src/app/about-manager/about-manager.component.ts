import { CalenderServiceProxy, CalenderDto } from './../../shared/service-proxies/service-proxies';
import { Observable } from 'rxjs/internal/Observable';
import { AppComponentBase } from '@shared/app-component-base';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { Component, Injector, OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { DSDKDto, DSDKServiceProxy } from '@shared/service-proxies/service-proxies';
@Component({
  selector: 'app-about-manager',
  templateUrl: './about-manager.component.html',
  styleUrls: ['./about-manager.component.scss']
})
export class AboutManagerComponent extends AppComponentBase
  implements OnInit {
  shownLoginName = '';
  newDSDK: DSDKDto = new DSDKDto;
  DSDKListCalendar$: Observable<CalenderDto[]>;
  DSDKList$: Observable<DSDKDto[]>;
  DSDKList: any[];

  constructor(
    injector: Injector,
    private dsdk: DSDKServiceProxy,
    private calenderList: CalenderServiceProxy

    ) {
    super(injector);
  }

  ngOnInit() {
    this.DSDKListCalendar$ = this.calenderList.getCalender();
    this.shownLoginName = this.appSession.getShownLoginName();
    this.DSDKList$ = this.dsdk.getDSDK(); 
  }
  isContainerVisible = false;

  //getall
  getList(){
    this.dsdk.getDSDK().subscribe((res) => {
      this.newDSDK = new DSDKDto();
      console.log(res)
      console.log(this.newDSDK)
    });
  }

}
