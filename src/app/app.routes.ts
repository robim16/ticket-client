import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tickets',
    loadChildren: () =>
      import('./tickets/tickets.routes').then(m => m.TICKETS_ROUTES)
  },
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: '**', redirectTo: 'tickets' }
];
