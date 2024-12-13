import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SavedComponent } from './saved/saved.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
];