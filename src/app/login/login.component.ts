// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  showRecommendations = false; // Control the visibility of the recommendations
  recommendedCourses = [
    {
      title: 'Introduction to Machine Learning',
      rating: 4.8,
      comments: [
        'This course is amazing!',
        'Helped me understand the basics of ML.',
        'Highly recommend for beginners.'
      ]
    },
    {
      title: 'Advanced Data Science',
      rating: 4.5,
      comments: [
        'Challenging but rewarding.',
        'Great explanations of complex topics.',
        'A must for aspiring data scientists.'
      ]
    },
    {
      title: 'Web Development Bootcamp',
      rating: 4.9,
      comments: [
        'Best course for web development.',
        'Covers everything you need to know.',
        'Fantastic hands-on projects.'
      ]
    }
  ];

  constructor(private router: Router) {}

  // Display recommendations with a delay for animation
  ngOnInit() {
    setTimeout(() => {
      this.showRecommendations = true;
    }, 500); // Delay for 500ms to trigger animation
  }

  // Handle user login and redirect to home page
  onLogin() {
    // Perform login logic here
    this.router.navigate(['/home']);
  }
}

