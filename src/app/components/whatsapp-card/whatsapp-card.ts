import { Component } from '@angular/core';
import { TranslationService } from '../../core/services/translation';

@Component({
  selector: 'app-whatsapp-card',
  standalone: true,
  templateUrl: './whatsapp-card.html',
  styleUrls: ['../call-host/call-host.css'], // Shares structural layout
})
export class WhatsappCardComponent {
  constructor(public ts: TranslationService) {}

  openWhatsapp() {
    const text = encodeURIComponent(
      'Thank you for the invitation. We will surely join and bless the baby boy!',
    );
    window.open(`https://wa.me/917423025111?text=${text}`, '_blank');
  }
}
