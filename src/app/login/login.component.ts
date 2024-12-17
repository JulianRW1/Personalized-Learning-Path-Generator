
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule], // Add CommonModule here
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// export class LoginComponent {
//   constructor(private router: Router) {}
//   onLogin() {
//     // Perform login logic here
//     this.router.navigate(['/home']);
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add CommonModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;

    // Mock storage check - Replace with backend authentication
    const user = JSON.parse(localStorage.getItem(email) || '{}');
    if (user.password === password) {
      alert('Login successful!');
      this.router.navigate(['/home']); // Route to profile
    }else {
      // Invalid credentials
      alert('Invalid email or password. Please try again or create a new account.');
    }
  }

  onCreateAccount() {
    // Navigate to the signup component programmatically
    this.router.navigate(['/signup']);
  }
}
