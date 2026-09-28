import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';
import { Devis } from './pages/devis/devis';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'services', component: Services },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
  { path: 'devis', component: Devis },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: Dashboard },
  { path: '**', redirectTo: '' }
];
