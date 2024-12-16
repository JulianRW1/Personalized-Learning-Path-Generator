import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';


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

  constructor(private fb: FormBuilder, private router: Router) {
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
    localStorage.setItem(formData.email, JSON.stringify(formData));
    alert('Account created successfully!');
    this.router.navigate(['/login']);
  }
}
