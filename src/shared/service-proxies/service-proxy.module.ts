import { SalesComponent } from './../../app/sales/sales.component';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AbpHttpInterceptor } from 'abp-ng2-module';

import * as ApiServiceProxies from './service-proxies';

@NgModule({
    providers: [
        ApiServiceProxies.RoleServiceProxy,
        ApiServiceProxies.SessionServiceProxy,
        ApiServiceProxies.TenantServiceProxy,
        ApiServiceProxies.UserServiceProxy,
        ApiServiceProxies.TokenAuthServiceProxy,
        ApiServiceProxies.AccountServiceProxy,
        ApiServiceProxies.ConfigurationServiceProxy,
        ApiServiceProxies.SaleServiceProxy,
        ApiServiceProxies.SupportServiceProxy,
        ApiServiceProxies.DSDKServiceProxy,
        ApiServiceProxies.CTGoiTapServiceProxy,
        ApiServiceProxies.GoiTapServiceProxy,
        ApiServiceProxies.CalenderServiceProxy,
        ApiServiceProxies.LandingpageIntroServiceProxy,
        ApiServiceProxies.LoiichServiceProxy,
        ApiServiceProxies.AiCanTapServiceProxy,
        ApiServiceProxies.PtGymServiceProxy,
        ApiServiceProxies.IntroPtServiceProxy,
        ApiServiceProxies.FitnessServiceProxy,
        ApiServiceProxies.FitnessListServiceProxy,
        ApiServiceProxies.NhuCauServiceProxy,
        ApiServiceProxies.NhuCauTapLuyenServiceProxy,
                
        { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true }
    ]
})
export class ServiceProxyModule { }
