import * as angular from 'angular';

// Define the LoginComponent for AngularJS
export const LoginComponent = {
  templateUrl: './login.component.html',  // Path to the HTML template
  controller: function($state: angular.ui.IStateService) {
    // Define form model
    this.loginForm = {
      email: '',
      password: ''
    };

    // Method to handle form submission
    this.onLogin = () => {
      const { email, password } = this.loginForm;

      // Mock storage check - Replace with backend authentication
      const user = JSON.parse(localStorage.getItem(email) || '{}');
      if (user && user.password === password) {
        alert('Login successful!');
        $state.go('profile');  // Navigate to profile state using ui-router
      } else {
        alert('Invalid email or password');
      }
    };
  }
};