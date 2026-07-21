import { Component } from '@angular/core';
import { TranslationService } from '../../core/services/translation';
import { CalendarService } from '../../core/services/calendar';

@Component({
  selector: 'app-calendar-card',
  standalone: true,
  templateUrl: './calendar-card.html',
})
export class CalendarCardComponent {
  constructor(
    public ts: TranslationService,
    private calendar: CalendarService,
  ) {}

  addToCalendar() {
    window.open(this.calendar.generateGoogleCalendarUrl(), '_blank');
  }
}
