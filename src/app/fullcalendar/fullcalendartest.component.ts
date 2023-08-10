import { CalenderDto, CalenderServiceProxy } from './../../shared/service-proxies/service-proxies';
import { Component, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { Console } from 'console';
import * as moment from 'moment';

@Component({
  selector: 'app-fullcalendartest',
  templateUrl: './fullcalendartest.component.html',
  styleUrls: ['./fullcalendartest.component.scss']
})
export class FullcalendartestComponent {

  newCalender: CalenderDto = new CalenderDto;
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
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private calenderList: CalenderServiceProxy
    ) {
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
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    // const currentTime = moment();
    // this.newCalender.time = currentTime ;
    this.newCalender.nameCalender =  '1' ;
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
    }
    })
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
}
