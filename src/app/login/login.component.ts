
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
import { AuthService } from '../auth.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add CommonModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).pipe(
      tap(response => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.token);  // Save JWT token
        this.router.navigate(['/home']);
      }),
      catchError(error => {
        console.error('Login failed', error);
        alert('Login failed')
        // Handle the error properly (e.g., show an error message to the user)
        return of(null); // Return an observable so the flow continues
      })
    ).subscribe();
  }

  onCreateAccount() {
    // Navigate to the signup component programmatically
    this.router.navigate(['/signup']);
  }
}
