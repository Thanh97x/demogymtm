import { Observable } from 'rxjs/internal/Observable';
import { AppComponentBase } from '@shared/app-component-base';
import { CalenderDto, CalenderServiceProxy } from './../../shared/service-proxies/service-proxies';
import { Component, ChangeDetectorRef, Injector, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { Console, error } from 'console';
import * as moment from 'moment';
import { title } from 'process';
import { forEach } from 'lodash-es';
@Component({
  selector: 'app-fullcalendartest',
  templateUrl: './fullcalendartest.component.html',
  styleUrls: ['./fullcalendartest.component.scss']
})

export class FullcalendartestComponent extends AppComponentBase
implements OnInit {
  listCalender: any[];
  newCalender: CalenderDto = new CalenderDto;
  shownLoginName = '';

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  constructor(
    injector: Injector,
    private changeDetector: ChangeDetectorRef,
    private calenderList: CalenderServiceProxy
    ) {
      super(injector);
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }


  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Vui lòng nhập tiêu đề mới cho sự kiện của bạn');
    if(title !== null){
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    this.newCalender.nameCalender = this.shownLoginName;
    this.newCalender.event = title;

    this.calenderList.addCalender(this.newCalender)
    .subscribe((res)=>{
      this.newCalender = new CalenderDto();
      console.log(res)

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }})
  }
  }


  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Bạn có chắc chắn muốn xóa sự kiện '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
  savedEvents: EventApi[] = [];
  DSDKList$: Observable<CalenderDto[]>;

  ngOnInit() {
    this.DSDKList$ = this.calenderList.getCalender();
    this.shownLoginName = this.appSession.getShownLoginName();
    const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
    const INITIAL_EVENTS2 = [
      {
          id: createEventId(),
          title: 'Click thêm mới sự kiện',
          start: TODAY_STR,
      },
    ];

    this.calenderList.getCalender().subscribe(
      (result)=>{
      
      this.listCalender = result;
    },
      (error)=>{
        console.log(error)
      }
    )

    this.calendarOptions.initialEvents = INITIAL_EVENTS2;
  }

 
}
