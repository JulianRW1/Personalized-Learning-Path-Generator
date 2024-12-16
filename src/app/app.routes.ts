import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { Sign } from 'crypto';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Default route redirects to /welcome
  { path: 'welcome', component: WelcomeComponent },        // Welcome page
  { path: 'login', component: LoginComponent },            // Login page
  { path: 'home', component: HomeComponent },              // Home page
  { path: 'signup', component: SignupComponent},           // Signup page 
  { path: 'profile', component: ProfileComponent}
];


export class AppComponent {
  title = 'Learnify';
}

