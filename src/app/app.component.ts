// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'Learnify';
// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Adjust the path if necessary
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LoginComponent, HomeComponent], // Add LoginComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//   imports: [RouterOutlet, NavbarComponent, LoginComponent], // Add NavbarComponent to imports
//   template: `
//     <app-navbar></app-navbar> <!-- Navbar included here -->
//     <router-outlet></router-outlet> <!-- Routed components displayed here -->
//   `,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Learnify';
// }

export class AppComponent {
  title = 'Learnify';
  userName = 'Guest';

  onGetStarted() {
    alert('Welcome to Learnify!'); // Example action, replace as needed
  }
}