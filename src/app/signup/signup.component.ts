import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-signup',
  // standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  selectedSkills: string[] = [];
  skills = ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'Unix'];

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      verifyPassword: ['', Validators.required],
      role: ['Student'],
      skillsToLearn: ['']
    });
  }

  onSkillChange(event: any) {
    if (event.target.checked) {
      this.selectedSkills.push(event.target.value);
    } else {
      this.selectedSkills = this.selectedSkills.filter(skill => skill !== event.target.value);
    }
  }

  onSignup() {
    const formData = { ...this.signupForm.value, skills: this.selectedSkills };

    if (formData.password !== formData.verifyPassword) {
      alert('Passwords do not match');
      return;
    }

    // Store user info in localStorage (simulate backend)
    this.authService.signup(formData.password, formData.email, formData.firstName, formData.lastName).pipe(
      tap(response => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
      }),
      catchError(error => {
        console.error('Registration failed', error);
        alert('Registration failed');
        // Handle error (e.g., show an error message)
        return of(null); // Continue the observable chain
      })
    ).subscribe();
  }
}
