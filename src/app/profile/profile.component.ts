import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-profile',
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      skillsToLearn: ['']
    });
  }

  ngOnInit() {
    const userEmail = localStorage.getItem('currentUser');
    const userData = JSON.parse(localStorage.getItem(userEmail!) || '{}');
    this.profileForm.patchValue(userData);
  }

  onSave() {
    const updatedData = this.profileForm.value;
    const userEmail = localStorage.getItem('currentUser');
    localStorage.setItem(userEmail!, JSON.stringify(updatedData));
    alert('Profile updated successfully!');
  }
}
