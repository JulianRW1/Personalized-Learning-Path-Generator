import * as angular from 'angular';
import '@uirouter/angularjs';  // Import ui-router

// Import Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';

// Create AngularJS module
export const appModule = angular.module('app', ['ui.router'])

// Register Components
  .component('welcome', WelcomeComponent)
  .component('login', LoginComponent)
  .component('signup', SignupComponent)
  .component('home', HomeComponent)
  .component('profile', ProfileComponent)

  // Configure states using ui-router
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/welcome');  // Default redirect

    // Define states
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        component: 'welcome'  // Use 'welcome' component
      })
      .state('login', {
        url: '/login',
        component: 'login'  // Use 'login' component
      })
      .state('home', {
        url: '/home',
        component: 'home'  // Use 'home' component
      })
      .state('signup', {
        url: '/signup',
        component: 'signup'  // Use 'signup' component
      })
      .state('profile', {
        url: '/profile',
        component: 'profile'  // Use 'profile' component
      });
  }]);