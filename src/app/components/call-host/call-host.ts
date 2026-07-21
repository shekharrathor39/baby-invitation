import { Component } from '@angular/core';
import { TranslationService } from '../../core/services/translation';

@Component({
  selector: 'app-call-host',
  standalone: true,
  templateUrl: './call-host.html',
  styleUrls: ['./call-host.css'],
})
export class CallHostComponent {
  phone = '+91 9898773977';
  constructor(public ts: TranslationService) {}

  triggerCall() {
    window.location.href = `tel:${this.phone}`;
  }
}
