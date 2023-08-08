import { AppAuthService } from './../../../shared/auth/app-auth.service';
import { finalize } from 'rxjs/operators';
import { CTGoiTapDto, CTGoiTapServiceProxy, DSDKDto, GoiTapDto, GoiTapServiceProxy } from './../../../shared/service-proxies/service-proxies';
import { Component } from '@angular/core';
import { DSDKServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-about-list-dk',
  templateUrl: './about-list-dk.component.html',
  styleUrls: ['./about-list-dk.component.scss']
})
export class AboutListDkComponent {

  newDSDK: DSDKDto = new DSDKDto();

  newctGoiTap: CTGoiTapDto = new CTGoiTapDto();
  newGoiTap: GoiTapDto = new GoiTapDto();

  constructor(
    private dsdkservice: DSDKServiceProxy,
    private ctgoitap: CTGoiTapServiceProxy,
    private goitap: GoiTapServiceProxy,
    private authService: AppAuthService

    ) { }

    createListDK(): void {
    debugger
    this.dsdkservice
    .addDSDK(this.newDSDK).subscribe((res)=> {
          console.log('thanh công', res),
          this.newDSDK = new DSDKDto;
        })
        
    }

    getDSDK(): void {
      this.dsdkservice.getDSDK().subscribe((result) => {
        this.newDSDK = new DSDKDto;
      });
    }
}
