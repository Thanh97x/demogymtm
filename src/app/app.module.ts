import { ChartModule } from 'primeng/chart';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
// layout
import { HeaderComponent } from './layout/header.component';
import { HeaderLeftNavbarComponent } from './layout/header-left-navbar.component';
import { HeaderLanguageMenuComponent } from './layout/header-language-menu.component';
import { HeaderUserMenuComponent } from './layout/header-user-menu.component';
import { FooterComponent } from './layout/footer.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SidebarLogoComponent } from './layout/sidebar-logo.component';
import { SidebarUserPanelComponent } from './layout/sidebar-user-panel.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FitnessNewsComponent } from './fitness-news/fitness-news.component';
import { FooterLandingpageComponent } from './footer-landingpage/footer-landingpage.component';
import { AboutManagerComponent } from './about-manager/about-manager.component';
import { AboutGiahanComponent } from './about-giahan/about-giahan.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FullcalendartestComponent } from './fullcalendar/fullcalendartest.component';
import { AboutListPackageComponent } from './about-list-package/about-list-package.component';
import { AboutListZumbaComponent } from './about-list-package/about-list-zumba/about-list-zumba.component';
import { AboutListTtComponent } from './about-list-package/about-list-tt/about-list-tt.component';
import { AboutListDkComponent } from './about-list-package/about-list-dk/about-list-dk.component';
import { AboutListPtComponent } from './about-list-package/about-list-pt/about-list-pt.component';
import { SalesComponent } from './sales/sales.component';
import { CreateSalesComponent } from './sales/create-sales/create-sales.component';
import { EditSalesComponent } from './sales/edit-sales/edit-sales.component';
import { SupportComponent } from './support/support.component';
import { SupportAdminComponent } from './support-admin/support-admin.component';

//calendar
// import { FlatpickrModule } from 'angularx-flatpickr';
// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        // tenants
        TenantsComponent,
        CreateTenantDialogComponent,
        EditTenantDialogComponent,
        // roles
        RolesComponent,
        CreateRoleDialogComponent,
        EditRoleDialogComponent,
        // users
        UsersComponent,
        CreateUserDialogComponent,
        EditUserDialogComponent,
        ChangePasswordComponent,
        ResetPasswordDialogComponent,
        // layout
        HeaderComponent,
        HeaderLeftNavbarComponent,
        HeaderLanguageMenuComponent,
        HeaderUserMenuComponent,
        FooterComponent,
        SidebarComponent,
        SidebarLogoComponent,
        SidebarUserPanelComponent,
        SidebarMenuComponent,
        NavBarComponent,
        FitnessNewsComponent,
        FooterLandingpageComponent,
        AboutManagerComponent,
        AboutGiahanComponent,
        FullcalendartestComponent,
        AboutListPackageComponent,
        AboutListZumbaComponent,
        AboutListTtComponent,
        AboutListDkComponent,
        AboutListPtComponent,
        //Sales
        SalesComponent,
        CreateSalesComponent,
        EditSalesComponent,
        SupportComponent,
        SupportAdminComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        ModalModule.forChild(),
        BsDropdownModule,
        CollapseModule,
        TabsModule,
        AppRoutingModule,
        ServiceProxyModule,
        SharedModule,
        NgxPaginationModule,
        FullCalendarModule,
        MessagesModule,
        ChartModule
        

        // FlatpickrModule.forRoot(),
        // CalendarModule.forRoot({
        //     provide: DateAdapter,
        //     useFactory: adapterFactory,
        // })

    ],
    providers: [],
})
export class AppModule { }
