import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation';

@Component({
  selector: 'app-wishes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishes.html',
  styleUrls: ['./wishes.css'],
})
export class WishesComponent {
  constructor(public ts: TranslationService) {}
}
