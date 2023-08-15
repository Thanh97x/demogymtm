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
    
    //hiển thị từ api
    this.newCalender.nameCalender = this.shownLoginName;
    this.newCalender.event = title;

    //local storage
    const storedEvents = JSON.parse(localStorage.getItem('storedEvents') || '[]');
    storedEvents.push({
      title: title,
      start: selectInfo.startStr,
    });
    localStorage.setItem('storedEvents', JSON.stringify(storedEvents));

    //apt thêm mới
    this.calenderList.addCalender(this.newCalender)
    .subscribe((res)=>{
      this.newCalender = new CalenderDto();
      console.log(res)

    //tải
    this.refreshEventList();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
      this.calendarOptions.initialEvents = this.listCalender.map((item) => ({
            id: createEventId(),
            title: item.event,
            start: item.time,
      }));
    }})
  }
}
refreshEventList() {
  this.DSDKList$ = this.calenderList.getCalender();
}

handleEventClick(clickInfo: EventClickArg, id: number) {
  if (confirm(`Bạn có chắc chắn muốn xóa sự kiện '${clickInfo.event.title}'`)) {
    // Xóa sự kiện khỏi giao diện FullCalendar
    clickInfo.event.remove();

    // Xóa sự kiện khỏi local storage
    const storedEvents = JSON.parse(localStorage.getItem('storedEvents') || '[]');
    const eventIndex = storedEvents.findIndex(
      (event) => 
      event.title === clickInfo.event.title && 
      event.start === clickInfo.event.startStr
    );
    if (eventIndex !== -1) {
      storedEvents.splice(eventIndex, 1);
      localStorage.setItem('storedEvents', JSON.stringify(storedEvents));
    }

    // Xóa sự kiện khỏi API
    const eventIdToDelete = id; // Assuming you use the event ID as an identifier
    this.calenderList.deleteCalender(eventIdToDelete).subscribe(
      (response) => {
        console.log('Event deleted from API', response);
      },
      (error) => {
        console.error('Error deleting event from API', error);
      }
    );

    // Kích hoạt kiểm tra thay đổi để cập nhật giao diện
    this.changeDetector.detectChanges();
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

    const storedEvents = JSON.parse(localStorage.getItem('storedEvents') || '[]');
    this.calendarOptions.events = storedEvents.map((item) => ({
    title: item.title,
    start: item.start,
    }));

    this.calendarOptions.initialEvents = INITIAL_EVENTS2;

    this.DSDKList$.subscribe(
      (result) => {
        this.listCalender = result;
        console.log('list', result);
        
        // Gọi lại cấu hình initialEvents để hiển thị danh sách sự kiện
        this.calendarOptions.initialEvents = this.listCalender.map(item => ({
          id: createEventId(),
          title: item.event,
          start: item.time, // Đảm bảo item.time là kiểu Date
        }));
      },
      (error) => {
        console.log(error);
      }
  );
}
}
