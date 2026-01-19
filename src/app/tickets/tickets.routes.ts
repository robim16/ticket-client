import { Routes } from '@angular/router';
import { ListTicketsComponent } from './pages/list-tickets/list-tickets';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket';
import { EditTicketComponent } from './pages/edit-ticket/edit-ticket';
import { AuthGuard } from '../auth.guard';

export const TICKETS_ROUTES: Routes = [
  { path: '', component: ListTicketsComponent, canActivate: [AuthGuard]},
  { path: 'new', component: CreateTicketComponent, canActivate: [AuthGuard] },
  { path: ':id/edit', component: EditTicketComponent, canActivate: [AuthGuard] } 
];
