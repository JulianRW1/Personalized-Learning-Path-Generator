import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../services/course.service';

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
  editForm = { technicalSkills: '', topicsOfInterest: '', goals: '' };

  coursesInProgress: any[] = [];
  topicsOfInterest: string[] = [];
  recommendedCourses: any[] = [];
  selectedCourse: any;

  constructor(private http: HttpClient, private courseService: CourseService) {
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
      topicsOfInterest: this.user.topicsOfInterest?.join(', ') || '',
      goals: this.user.goals || '',
    };
    this.isEditFormOpen = true;
  }

  saveEditForm() {
    this.user.technicalSkills = this.editForm.technicalSkills.split(',').map((s) => s.trim());
    this.user.topicsOfInterest = this.editForm.topicsOfInterest.split(',').map((s) => s.trim());
    this.user.goals = this.editForm.goals;
    localStorage.setItem(this.user.email, JSON.stringify(this.user));
    this.isEditFormOpen = false;
  }

  closeEditForm() {
    this.isEditFormOpen = false;
  }

  getRecommendations() {
    const skillsParam = this.user.topicsOfInterest?.join(',') || '';
    const apiUrl = `http://127.0.0.1:5000/courses?skills=${skillsParam}`;
    
    this.http.get<{ results: any[] }>(apiUrl).subscribe((data) => {
      // Use the 'results' key from the response
      if (data?.results && Array.isArray(data.results)) {
        this.recommendedCourses = data.results;
      } else {
        this.recommendedCourses = [];
        console.error('Unexpected API response structure:', data);
      }
    }, (error) => {
      console.error('Error fetching recommendations:', error);
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





// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { NavbarComponent } from '../navbar/navbar.component';
// import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
// import { FormsModule } from '@angular/forms';
// import { CourseService } from '../services/course.service';
// // import { environment } from '../../environments/environment';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [NavbarComponent, CommonModule, FormsModule],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],
// })
// export class HomeComponent {
//   user: any = {};
//   isEditFormOpen = false;
//   editForm = { technicalSkills: '', topicsOfInterest: '', goals: '' };

//   coursesInProgress: any[] = [];
//   recommendedCourses: any[] = [];
//   selectedCourse: any;

//   constructor(private http: HttpClient, private courseService: CourseService) {
//     this.loadUserData();
//   }

//   loadUserData() {
//     const email = localStorage.key(0) || ''; // Fallback if null
//     const userData = localStorage.getItem(email);
//     if (userData) {
//       this.user = JSON.parse(userData);
//     } else {
//       this.user = {};
//     }
//   }

//   openEditForm() {
//     this.editForm = {
//       technicalSkills: this.user.technicalSkills?.join(', ') || '',
//       topicsOfInterest: this.user.topicsOfInterest?.join(', ') || '',
//       goals: this.user.goals || '',
//     };
//     this.isEditFormOpen = true;
//   }

//   saveEditForm() {
//     this.user.technicalSkills = this.editForm.technicalSkills.split(',').map((s) => s.trim());
//     this.user.topicsOfInterest = this.editForm.topicsOfInterest.split(',').map((s) => s.trim());
//     this.user.goals = this.editForm.goals;
//     localStorage.setItem(this.user.email, JSON.stringify(this.user));
//     this.isEditFormOpen = false;
//   }

//   closeEditForm() {
//     this.isEditFormOpen = false;
//   }

//   getRecommendations() {
//     const skillsParam = this.user.topicsOfInterest?.join(',') || '';
//     const apiUrl = `http://127.0.0.1:5000/courses?skills=${skillsParam}`;
//     this.http.get<any[]>(apiUrl).subscribe((data) => {
//       this.recommendedCourses = data;
//     });
//   }

//   openCourse(course: any) {
//     this.selectedCourse = course;
//   }

//   closeCoursePopup() {
//     this.selectedCourse = null;
//   }

//   startCourse(course: any) {
//     this.coursesInProgress.push(course);
//     this.closeCoursePopup();
//   }
// }
