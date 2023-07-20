import { AddCoachComponent } from '././add-coach/add-coach.component';
import { LandingpageComponent } from './landingpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FitnessComponent } from './fitness/fitness.component';
import { SupportComponent } from './support/support.component';
import { InforHlvComponent } from './infor-hlv/infor-hlv.component';
import { FitnessNewssHitthoComponent } from './fitness-newss/fitness-newss-hittho/fitness-newss-hittho.component';
import { FitnessNewssCobanchonuComponent } from './fitness-newss/fitness-newss-cobanchonu/fitness-newss-cobanchonu.component';
import { FitnessNewssGymSupportComponent } from './fitness-newss/fitness-newss-gym-support/fitness-newss-gym-support.component';
import { FitnessNewssBiquyetComponent } from './fitness-newss/fitness-newss-biquyet/fitness-newss-biquyet.component';
import { FitnessNewssWhyGymComponent } from './fitness-newss/fitness-newss-why-gym/fitness-newss-why-gym.component'
import { FitnessNewssExpComponent } from './fitness-newss/fitness-newss-nhucau/fitness-newss-exp/fitness-newss-exp.component'
import { FitnessNewssHieuquaComponent } from './fitness-newss/fitness-newss-nhucau/fitness-newss-hieuqua/fitness-newss-hieuqua.component'
import { FitnessNewssKientriComponent } from './fitness-newss/fitness-newss-nhucau/fitness-newss-kientri/fitness-newss-kientri.component'
import { FitnessNewssDepComponent } from './fitness-newss/fitness-newss-nhucau/fitness-newss-dep/fitness-newss-dep.component'
import { LoginComponent } from '../account/login/login.component'
import { InforHlv2Component } from './infor-hlv2/infor-hlv2.component'
import { RegisterComponent } from '../account/register/register.component'

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LandingpageComponent,
        children: [
          { path: '', component: HomepageComponent },
          { path: 'coach', component: AddCoachComponent },
          { path: 'fitness', component: FitnessComponent },
          { path: 'support', component: SupportComponent },
          { path: 'coach/hlv', component: InforHlvComponent },
          { path: 'coach/hlv/sang-nguyen', component: InforHlv2Component },
          { path: 'fitness/cach-hit-tho-cho-nguoi-moi-tap', component: FitnessNewssHitthoComponent },
          { path: 'fitness/bai-tap-co-ban-cho-nu-moi-bat-dau', component: FitnessNewssCobanchonuComponent },
          { path: 'fitness/gym-bien-phap-ho-tro-giam-can', component: FitnessNewssGymSupportComponent },
          { path: 'fitness/bi-kip-tap-gym-dung-cach', component: FitnessNewssBiquyetComponent },
          { path: 'fitness/vi-sao-nen-tap-gym', component: FitnessNewssWhyGymComponent },
          { path: 'fitness/kinh-nghiem-cho-nu-moi', component: FitnessNewssExpComponent },
          { path: 'fitness/mot-so-bai-hieu-qua-nu-gioi', component: FitnessNewssHieuquaComponent },
          { path: 'fitness/kinh-nghiem-dong-luc-ben-bi', component: FitnessNewssKientriComponent },
          { path: 'fitness/than-hinh-dep', component: FitnessNewssDepComponent },
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },

        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class LandingpageRoutingModule { }
