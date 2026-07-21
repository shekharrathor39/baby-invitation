import { Component } from '@angular/core';
import { TranslationService } from '../../core/services/translation';

@Component({
  selector: 'app-venue',
  standalone: true,
  templateUrl: './venue.html',
  styleUrls: ['./venue.css'],
})
export class VenueComponent {
  constructor(public ts: TranslationService) {}
}
