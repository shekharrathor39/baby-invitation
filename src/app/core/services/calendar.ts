import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  generateGoogleCalendarUrl(): string {
    const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const text = encodeURIComponent('Katha & Dinner - Baby Boy Celebration');
    const dates = '20250529T123000Z/20250529T163000Z'; // UTC Conversion of May 29, 2025, 6:00 PM IST
    const details = encodeURIComponent('Please join us with your family and bless our little one.');
    const location = encodeURIComponent(
      'Karnavati Riviera, Near S.P. Ring Road, Koba, Gandhinagar, Gujarat 382426',
    );

    return `${base}&text=${text}&dates=${dates}&details=${details}&location=${location}`;
  }
}
