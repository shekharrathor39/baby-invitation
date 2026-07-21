import { Routes } from '@angular/router';
import { InvitationComponent } from './components/invitation/invitation';

export const routes: Routes = [
  { path: '', component: InvitationComponent },
  { path: '**', redirectTo: '' },
];
