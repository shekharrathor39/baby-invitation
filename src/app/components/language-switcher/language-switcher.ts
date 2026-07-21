import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.html',
  styleUrls: ['./language-switcher.css'],
})
export class LanguageSwitcherComponent {
  constructor(public translationService: TranslationService) {}

  changeLanguage(lang: 'en' | 'hi') {
    this.translationService.setLanguage(lang);
  }
}
