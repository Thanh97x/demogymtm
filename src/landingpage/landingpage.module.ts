import { FacebookLoginProvider, SocialAuthService, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { CarouselModule } from './carousel/carousel.module';
import { RootModule } from './../root.module';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { PropertyGymAddressComponent } from './property-gym-address/property-gym-address.component';
import { PropertyFitnessPackgeComponent } from './property-fitness-packge/property-fitness-packge.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingpageRoutingModule } from './landingpage-routing.module';
import { PropertyBoxGymComponent } from './property-box-gym/property-box-gym.component';
import { PropertyBoxSaleComponent } from './property-box-sale/property-box-sale.component';
import { PropertyBoxCovenientComponent } from './property-box-covenient/property-box-covenient.component';
import { AddCoachComponent } from './add-coach/add-coach.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyFooterComponent } from './property-footer/property-footer.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { PageMenuComponent } from './menu/page-menu.component';
import { LandingpageComponent } from './landingpage.component';
import { FitnessComponent } from './fitness/fitness.component';
import { SupportComponent } from './support/support.component';
import { InforHlvComponent } from './infor-hlv/infor-hlv.component';
import { FitnessNewssComponent } from './fitness-newss/fitness-newss.component';
import { FitnessNewssHitthoComponent } from './fitness-newss/fitness-newss-hittho/fitness-newss-hittho.component';
import { FitnessNewssCobanchonuComponent } from './fitness-newss/fitness-newss-cobanchonu/fitness-newss-cobanchonu.component';
import { FitnessNewssGymSupportComponent } from './fitness-newss/fitness-newss-gym-support/fitness-newss-gym-support.component';
import { FitnessNewssBiquyetComponent } from './fitness-newss/fitness-newss-biquyet/fitness-newss-biquyet.component';
import { FitnessNewssWhyGymComponent } from './fitness-newss/fitness-newss-why-gym/fitness-newss-why-gym.component';
import { FitnessNewssNhucauComponent } from './fitness-newss/fitness-newss-nhucau/fitness-newss-nhucau.component';
import { FitnessNewssExpComponent } from './fitness-newss/fitness-newss-nhucau/fitness-newss-exp/fitness-newss-exp.component';
import { FitnessNewssHieuquaComponent } from './fitness-newss/fitness-newss-nhucau/fitness-newss-hieuqua/fitness-newss-hieuqua.component';
import { FitnessNewssKientriComponent } from './fitness-newss/fitness-newss-nhucau/fitness-newss-kientri/fitness-newss-kientri.component';
import { FitnessNewssDepComponent } from './fitness-newss/fitness-newss-nhucau/fitness-newss-dep/fitness-newss-dep.component';
import { InforHlv2Component } from './infor-hlv2/infor-hlv2.component';
import {RatingModule} from 'primeng/rating';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    LandingpageRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SharedModule,
    ServiceProxyModule,
    ModalModule.forChild(),
    RatingModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  declarations: [
    PropertyCardComponent,
    PropertyListComponent,
    PropertyFitnessPackgeComponent,
    PropertyBoxGymComponent,
    PropertyBoxSaleComponent,
    PropertyBoxGymComponent,
    AddCoachComponent,
    PropertyBoxCovenientComponent,
    HomepageComponent,
    PropertyGymAddressComponent,
    PropertyFooterComponent,
    PageMenuComponent,
    LandingpageComponent,
    FitnessComponent,
    SupportComponent,
    InforHlvComponent,
    FitnessNewssComponent,
    FitnessNewssHitthoComponent,
    FitnessNewssCobanchonuComponent,
    FitnessNewssGymSupportComponent,
    FitnessNewssBiquyetComponent,
    FitnessNewssWhyGymComponent,
    FitnessNewssNhucauComponent,
    FitnessNewssExpComponent,
    FitnessNewssHieuquaComponent,
    FitnessNewssKientriComponent,
    FitnessNewssDepComponent,
    InforHlv2Component,

  ],
  providers: [
    SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('596194762585525')
          },
          // Other providers if needed
        ]
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [InforHlvComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class LandingpageModule { }
