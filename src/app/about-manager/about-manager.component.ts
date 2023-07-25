import { AppComponentBase } from '@shared/app-component-base';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { Component, Injector, OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
//
// import { startOfDay, endOfDay } from 'date-fns';
// import { CalendarEvent } from 'mdb-calendar';

@Component({
  selector: 'app-about-manager',
  templateUrl: './about-manager.component.html',
  styleUrls: ['./about-manager.component.scss']
})
export class AboutManagerComponent extends AppComponentBase
  implements OnInit {
  shownLoginName = '';

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.shownLoginName = this.appSession.getShownLoginName();
  }
  isContainerVisible = false;


}
