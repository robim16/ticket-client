import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { AuthGuard } from '../auth.guard';

export const AUTH_ROUTES: Routes = [
  { path: '', component: Login, canActivate: [AuthGuard]},
];
