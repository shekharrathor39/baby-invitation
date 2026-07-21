import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  /**
   * Opens Google Maps with directions from the user's current location
   * to the provided destination.
   */
  navigateToMaps(lat: number, lng: number): void {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;

    window.open(url, '_blank');
  }
}
