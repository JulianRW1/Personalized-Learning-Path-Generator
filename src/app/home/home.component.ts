// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { NavbarComponent } from '../navbar/navbar.component';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule, HttpClientModule, NavbarComponent],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   user: any = {};
//   coursesInProgress: any[] = [];
//   recommendedCourses: any[] = [];
//   selectedCourse: any = null;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.loadUserData();
//   }

//   // Load user data from localStorage
//   loadUserData(): void {
//     const email = Object.keys(localStorage)[0];
//     const userData = JSON.parse(localStorage.getItem(email) || '{}');
//     this.user = {
//       firstName: userData.firstName || 'User',
//       role: userData.role || 'Student',
//       technicalSkills: userData.technicalSkills || [],
//       skillsToLearn: userData.skillsToLearn || [],
//       goals: userData.goals || ''
//     };
//   }

//   // Reset form popup (placeholder implementation)
//   resetForm(): void {
//     const updatedGoals = prompt('Update your goals:', this.user.goals);
//     if (updatedGoals !== null) {
//       this.user.goals = updatedGoals;
//       this.saveUserData();
//     }
//   }

//   // Save updated user data to localStorage
//   saveUserData(): void {
//     const email = Object.keys(localStorage)[0];
//     localStorage.setItem(email, JSON.stringify(this.user));
//     alert('Information updated successfully!');
//   }

//   // Fetch course recommendations
//   getRecommendations(): void {
//     const skillsQuery = this.user.technicalSkills.join(',').toLowerCase();
//     this.http.get<any[]>(`/courses?skills=${skillsQuery}`).subscribe((data) => {
//       this.recommendedCourses = data;
//     });
//   }

//   // Open course popup
//   openCourse(course: any): void {
//     this.selectedCourse = course;
//   }

//   // Start a course
//   startCourse(course: any): void {
//     this.coursesInProgress.push({ title: course.title });
//     this.closePopup();
//   }

//   // Close course popup
//   closePopup(): void {
//     this.selectedCourse = null;
//   }
// }





// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-home',
// //   imports: [],
// //   templateUrl: './home.component.html',
// //   styleUrl: './home.component.css'
// // })
// // export class HomeComponent {

// // }

// // import { Component } from '@angular/core';
// // import { Router } from '@angular/router';
// // import { NavbarComponent } from '../navbar/navbar.component';

// // @Component({
// //   selector: 'app-home',
// //   standalone: true,
// //   imports: [NavbarComponent],
// //   templateUrl: './home.component.html',
// //   styleUrls: ['./home.component.css'],
// // })
// // export class HomeComponent {
// //   constructor(private router: Router) {}
// //   userName: string = 'John Doe'; // Or fetch it dynamically from a service

// //   onGetStarted() {
//     // Redirect to another route, e.g., '/dashboard' or perform another action
//   //   this.router.navigate(['/dashboard']);
//   //   }
    
//   // }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user: any = {};
  isEditFormOpen = false;
  editForm = { technicalSkills: '', skillsToLearn: '', goals: '' };

  coursesInProgress: any[] = [];
  recommendedCourses: any[] = [];
  selectedCourse: any;

  constructor(private http: HttpClient) {
    this.loadUserData();
  }

  loadUserData() {
    const email = localStorage.key(0) || ''; // Fallback if null
    const userData = localStorage.getItem(email);
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.user = {};
    }
  }

  openEditForm() {
    this.editForm = {
      technicalSkills: this.user.technicalSkills?.join(', ') || '',
      skillsToLearn: this.user.skillsToLearn?.join(', ') || '',
      goals: this.user.goals || '',
    };
    this.isEditFormOpen = true;
  }

  saveEditForm() {
    this.user.technicalSkills = this.editForm.technicalSkills.split(',').map((s) => s.trim());
    this.user.skillsToLearn = this.editForm.skillsToLearn.split(',').map((s) => s.trim());
    this.user.goals = this.editForm.goals;
    localStorage.setItem(this.user.email, JSON.stringify(this.user));
    this.isEditFormOpen = false;
  }

  closeEditForm() {
    this.isEditFormOpen = false;
  }

  getRecommendations() {
    const skillsParam = this.user.technicalSkills?.join(',') || '';
    const apiUrl = `/courses?skills=${skillsParam}`;
    this.http.get<any[]>(apiUrl).subscribe((data) => {
      this.recommendedCourses = data;
    });
  }

  openCourse(course: any) {
    this.selectedCourse = course;
  }

  closeCoursePopup() {
    this.selectedCourse = null;
  }

  startCourse(course: any) {
    this.coursesInProgress.push(course);
    this.closeCoursePopup();
  }
}

