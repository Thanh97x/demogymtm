import { AddCoachComponent } from '././add-coach/add-coach.component';
import { LandingpageComponent } from './landingpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FitnessComponent } from './fitness/fitness.component';
import { SupportComponent } from './support/support.component';
import { InforHlvComponent } from './infor-hlv/infor-hlv.component'

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
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class LandingpageRoutingModule { }
