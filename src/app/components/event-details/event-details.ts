import { Component } from '@angular/core';
import { TranslationService } from '../../core/services/translation';

@Component({
  selector: 'app-event-details',
  standalone: true,
  templateUrl: './event-details.html',
  styleUrls: ['./event-details.css'],
})
export class EventDetailsComponent {
  constructor(public ts: TranslationService) {}
}
