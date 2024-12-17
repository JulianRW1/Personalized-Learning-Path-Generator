import * as angular from 'angular';
import '@uirouter/angularjs';  // Import ui-router module
import { WelcomeComponent } from './welcome/welcome.component'; // Import your component
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

const appModule = angular.module('app', ['ui.router'])  // Include ui.router as a dependency
  .config(($stateProvider: any, $urlRouterProvider: any) => {
    // Default route
    $urlRouterProvider.otherwise('/welcome');  // Redirect to /welcome if no matching route is found

    // Define states (routes)
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        component: 'welcome'  // Link to the WelcomeComponent
      })
      .state('login', {
        url: '/login',
        component: 'login'  // Link to the LoginComponent
      })
      .state('home', {
        url: '/home',
        component: 'home'  // Link to the HomeComponent
      })
      .state('signup', {
        url: '/signup',
        component: 'signup'  // Link to the SignupComponent
      })
      .state('profile', {
        url: '/profile',
        component: 'profile'  // Link to the ProfileComponent
      });
  });

// Register your components within the same file or another component-specific file.
appModule.component('welcome', WelcomeComponent);
appModule.component('login', LoginComponent);
appModule.component('home', HomeComponent);
appModule.component('signup', SignupComponent);
appModule.component('profile', ProfileComponent);

// Finally, bootstrap the app (in AngularJS, we do it here directly)
angular.bootstrap(document, ['app']);