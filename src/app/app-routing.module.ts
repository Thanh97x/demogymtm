import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { AboutManagerComponent } from './about-manager/about-manager.component';
import { AboutGiahanComponent } from './about-giahan/about-giahan.component'
import { FullcalendartestComponent } from './fullcalendar/fullcalendartest.component';
import { AboutListZumbaComponent } from './about-list-package/about-list-zumba/about-list-zumba.component'
import { AboutListTtComponent } from './about-list-package/about-list-tt/about-list-tt.component'
import { AboutListDkComponent } from './about-list-package/about-list-dk/about-list-dk.component';
import { AboutListPtComponent } from './about-list-package/about-list-pt/about-list-pt.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent, canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent, canActivate: [AppRouteGuard] },
                    { path: 'update-password', component: ChangePasswordComponent, canActivate: [AppRouteGuard] },
                    { path: 'about/quan-ly-the-tap', component: AboutManagerComponent, canActivate: [AppRouteGuard] },
                    { path: 'about/gia-han', component: AboutGiahanComponent, canActivate: [AppRouteGuard] },
                    { path: 'about/calendar', component: FullcalendartestComponent, canActivate: [AppRouteGuard] },
                    { path: 'about/gia-han/goi-zumba-yoga', component: AboutListZumbaComponent, canActivate: [AppRouteGuard] },
                    { path: 'about/gia-han/goi-tu-tap', component: AboutListTtComponent, canActivate: [AppRouteGuard] },
                    { path: 'about/gia-han/goi-doan-ket', component: AboutListDkComponent, canActivate: [AppRouteGuard] },
                    { path: 'about/gia-han/goi-pt', component: AboutListPtComponent, canActivate: [AppRouteGuard] },

                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
