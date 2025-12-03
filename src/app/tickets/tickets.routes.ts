import { Routes } from '@angular/router';
import { ListTicketsComponent } from './pages/list-tickets/list-tickets';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket';
import { EditTicketComponent } from './pages/edit-ticket/edit-ticket';

export const TICKETS_ROUTES: Routes = [
  { path: '', component: ListTicketsComponent},
  { path: 'new', component: CreateTicketComponent },
  { path: ':id/edit', component: EditTicketComponent } 
];
