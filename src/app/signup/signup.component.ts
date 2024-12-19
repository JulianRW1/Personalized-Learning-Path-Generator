import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

>>>>>>> 2d6d3b7630ecd6952a74fea2c02bc4167ef1bf01

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;

  // Skill options
  technicalSkillsOptions = [
    'HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C++',
    'Data Structures', 'Machine Learning', 'React', 'Angular',
    'Node.js', 'Databases', 'Cloud Computing', 'Cybersecurity',
  ];

  skillsToLearnOptions = [
    'AI and Machine Learning', 'Blockchain', 'Big Data', 'DevOps',
    'UI/UX Design', 'IoT (Internet of Things)', 'AR/VR',
    'Web Development', 'Mobile App Development', 'Game Development',
    'Quantum Computing',
  ];

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      verifyPassword: ['', Validators.required],
      role: ['', Validators.required],
      technicalSkills: [[]], // Store selected options as an array
      skillsToLearn: [[]],   // Store selected options as an array
    });
  }

  // Update multi-select value
  // onMultiSelectChange(controlName: 'technicalSkills' | 'skillsToLearn', options: HTMLOptionsCollection): void {
  //   const selectedValues = Array.from(selectedOptions)
  //     .filter(option => option.selected)
  //     .map(option => option.value);

  //   this.signupForm.get(controlName)?.setValue(selectedValues);
  // }

  onMultiSelectChange(field: string, event: Event) {
    const target = event.target as HTMLSelectElement;
    const options = target.options;
    
    // Now you can work with options, e.g., get selected values
    const selectedValues = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    
    console.log(selectedValues); // List of selected values
  }
  

  onSignup(): void {
    if (this.signupForm.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

<<<<<<< HEAD
    const formData = this.signupForm.value;

    // Verify passwords match
    if (formData.password !== formData.verifyPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Store user data (simulate backend API call)
    localStorage.setItem(formData.email, JSON.stringify(formData));
    alert('Account created successfully!');

    // Redirect to login page
    this.router.navigate(['/home']);
=======
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
>>>>>>> 2d6d3b7630ecd6952a74fea2c02bc4167ef1bf01
  }
}
