import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './family.html',
  styleUrls: ['./family.css'],
})
export class FamilyComponent {
  constructor(public ts: TranslationService) {}
}
