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

  // events: CalendarEvent[] = [
  //   {
  //     id: 'mdb-calendar-event-1',
  //     startDate: new Date(startOfDay(new Date())),
  //     endDate: new Date(endOfDay(new Date(2019, 2, 9))),
  //     name: 'Conference',
  //     color: 'info',
  //   },
  //   {
  //     id: 'mdb-calendar-event-2',
  //     startDate: new Date(startOfDay(new Date())),
  //     endDate: new Date(endOfDay(new Date())),
  //     name: 'Meeting',
  //     color: 'success'
  //   },
  // ];
  // generateUid() {
  //   const uid = Math.random().toString(36).substr(2, 9);
  //   return `mdb-calendar-event-${uid}`;
  // }

  // onEventEdit(event: CalendarEvent) {
  //   const oldEvent = this.events.findIndex(test => test.id === event.id);
  //   this.events[oldEvent] = event;
  //   this.events = [...this.events];
  // }

  // onEventAdd(event: CalendarEvent) {
  //   event.id = this.generateUid();
  //   this.events = [...this.events, event];
  // }

  // onEventDelete(deletedEvent: CalendarEvent) {
  //   const eventIndex = this.events.findIndex(event => event.id === deletedEvent.id);
  //   this.events.splice(eventIndex, 1);
  //   this.events = [...this.events];
  // }
}
