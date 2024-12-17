import * as angular from 'angular';
import { IStateService } from '@uirouter/angularjs';  // Importing the correct type for $state

export const LoginComponent = {
  templateUrl: './login.component.html',  // Path to HTML template
  controller: function($state: IStateService) {
    this.loginForm = {
      email: '',
      password: ''
    };

    this.onLogin = () => {
      const { email, password } = this.loginForm;

      // Mock storage check - Replace with backend authentication
      const user = JSON.parse(localStorage.getItem(email) || '{}');
      if (user && user.password === password) {
        alert('Login successful!');
        $state.go('profile');  // Use $state to navigate to the profile state
      } else {
        alert('Invalid email or password');
      }
    };
  }
};