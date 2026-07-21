import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';
import { HeaderComponent } from '../header/header';
import { EventDetailsComponent } from '../event-details/event-details';
import { CallHostComponent } from '../call-host/call-host';
import { GetDirectionsComponent } from '../get-directions/get-directions';
import { FooterComponent } from '../footer/footer';
import { TranslationService } from '../../core/services/translation';
import { CalendarCardComponent } from '../calendar-card/calendar-card';
import { WhatsappCardComponent } from '../whatsapp-card/whatsapp-card';
import { FamilyComponent } from '../family/family';
import { LocationComponent } from '../location/location';

@Component({
  selector: 'app-invitation',
  standalone: true,
  imports: [
    CommonModule,
    LocationComponent,
    LanguageSwitcherComponent,
    HeaderComponent,
    EventDetailsComponent,
    CallHostComponent,
    GetDirectionsComponent,
    FooterComponent,
    FamilyComponent,
    forwardRef(() => TemplateButtonsComponent),
  ],
  templateUrl: './invitation.html',
  styleUrls: ['./invitation.css'],
})
export class InvitationComponent {
  constructor(public ts: TranslationService) {}
}

@Component({
  selector: 'app-template-buttons',
  standalone: true,
  imports: [WhatsappCardComponent, CalendarCardComponent],
  template: `
    <div class="twin-grid">
      <app-whatsapp-card></app-whatsapp-card>
      <app-calendar-card></app-calendar-card>
    </div>
  `,
  styles: [
    `
      .twin-grid {
        background: linear-gradient(135deg, #7eaae0 0%, #128c7e 100%);
        display: grid;
        position: relative;
        overflow: hidden;
        display: inline-block;
        transition: transform 0.2s ease;
        transform: translateX(4px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateX(6px);
        padding: 18px 24px;
        border-radius: 24px;
        color: #fff;
        cursor: pointer;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-bottom: 14px;

        font-size: 19px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 1.1;

        text-transform: uppercase;
      }
    `,
  ],
})
export class TemplateButtonsComponent {}
