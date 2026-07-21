import { Component } from '@angular/core';
import { TranslationService } from '../../core/services/translation';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  constructor(public ts: TranslationService) {}
}
