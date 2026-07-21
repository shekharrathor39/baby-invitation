import { Injectable, signal } from '@angular/core';
import enTranslations from '../../../assets/i18n/en.json';
import hiTranslations from '../../../assets/i18n/hi.json';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLang = signal<'en' | 'hi'>('en');
  private translations: Record<'en' | 'hi', Record<string, string>> = {
    en: enTranslations,
    hi: hiTranslations,
  };

  getCurrentLanguage() {
    return this.currentLang.asReadonly();
  }

  setLanguage(lang: 'en' | 'hi') {
    this.currentLang.set(lang);
  }

  translate(key: string): string {
    return this.translations[this.currentLang()][key] || key;
  }
}
