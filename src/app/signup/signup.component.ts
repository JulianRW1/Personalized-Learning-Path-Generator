import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  topicsOfInterestOptions = [
    'machine-learning', 'data-analysis', 'web-development', 'python',
    'cybersecurity', 'ios-development', 'unix',
    'html', 'javascript', 'css', 'nodeJS'
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      verifyPassword: ['', Validators.required],
      role: ['', Validators.required],
      technicalSkills: [[]], // Store selected options as an array
      topicsOfInterest: [[]],   // Store selected options as an array
    });
  }

  // Update multi-select value
  // onMultiSelectChange(controlName: 'technicalSkills' | 'topicsOfInterest', options: HTMLOptionsCollection): void {
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
  }
}

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
// import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AuthService } from '../auth.service';
// import { catchError, tap } from 'rxjs/operators';
// import { of } from 'rxjs';


// @Component({
//   selector: 'app-signup',
//   imports: [CommonModule, ReactiveFormsModule],
//   standalone: true,
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css'],
// })
// export class SignupComponent {
//   signupForm: FormGroup;

//   // Skill options
//   technicalSkillsOptions = [
//     'HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C++',
//     'Data Structures', 'Machine Learning', 'React', 'Angular',
//     'Node.js', 'Databases', 'Cloud Computing', 'Cybersecurity',
//   ];

//   topicsOfInterestOptions = [
//     'AI and Machine Learning', 'Blockchain', 'Big Data', 'DevOps',
//     'UI/UX Design', 'IoT (Internet of Things)', 'AR/VR',
//     'Web Development', 'Mobile App Development', 'Game Development',
//     'Quantum Computing',
//   ];

//   constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
//     this.signupForm = this.fb.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(8)]],
//       verifyPassword: ['', Validators.required],
//       role: ['', Validators.required],
//       technicalSkills: [[]], // Store selected options as an array
//       topicsOfInterest: [[]],   // Store selected options as an array
//     });
//   }

//   // Update multi-select value

// onMultiSelectChange(field: string, event: Event) {
//   const target = event.target as HTMLSelectElement;
//   const options = target.options;
  
//   // Now you can work with options, e.g., get selected values
//   const selectedValues = Array.from(options)
//     .filter(option => option.selected)
//     .map(option => option.value);
  
//   console.log(selectedValues); // List of selected values
// }


// onSignup(): void {
//   if (this.signupForm.invalid) {
//     alert('Please fill out all required fields.');
//     return;
//   }

//   const formData = this.signupForm.value;

//   // Verify passwords match
//   if (formData.password !== formData.verifyPassword) {
//     alert('Passwords do not match.');
//     return;
//   }

//   // Store user data (simulate backend API call)
//   localStorage.setItem(formData.email, JSON.stringify(formData));
//   alert('Account created successfully!');

//   // Redirect to login page
//   this.router.navigate(['/home']);
// }
// }