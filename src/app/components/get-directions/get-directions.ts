import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation';
import { NavigationService } from '../../core/services/navigation';

@Component({
  selector: 'app-get-directions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-directions.html',
  styleUrls: ['./get-directions.css'],
})
export class GetDirectionsComponent implements OnInit, OnDestroy {
  readonly TOTAL_SECONDS = 50;

  countdown = signal<number>(this.TOTAL_SECONDS);
  dashoffset = signal<number>(0);

  private timerId: any;

  /**
   * Karnavati Riviera
   * New Maninagar, Ahmedabad
   *
   * Replace these with the exact Google Maps coordinates if desired.
   */

  private readonly lat = 22.9801415;
  private readonly lng = 72.6494678;

  constructor(
    public ts: TranslationService,
    private nav: NavigationService,
  ) {}

  ngOnInit(): void {
    // Prevent auto navigation while printing
    if (window.matchMedia('print').matches) {
      return;
    }

    this.timerId = setInterval(() => {
      this.countdown.update((value) => value - 1);

      // Circle circumference = 2πr = 113 (r = 18)
      this.dashoffset.set((113 * (this.TOTAL_SECONDS - this.countdown())) / this.TOTAL_SECONDS);

      if (this.countdown() <= 0) {
        this.clearTimer();
        this.routeToDestination();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  private clearTimer(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  routeToDestination(): void {
    this.clearTimer();

    // Opens Google Maps with:
    // Origin = Current Location
    // Destination = Karnavati Riviera
    this.nav.navigateToMaps(this.lat, this.lng);
  }
}
