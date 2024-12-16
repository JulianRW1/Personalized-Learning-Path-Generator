// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-welcome',
//   imports: [],
//   templateUrl: './welcome.component.html',
//   styleUrl: './welcome.component.css'
// })
// export class WelcomeComponent {
//   constructor(private router: Router) {}
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
// export class WelcomeComponent {
//   constructor(private router: Router) {}

//   // onGetStarted() {
//   //   this.router.navigate(['/login']);
//   // }
// }

export class WelcomeComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']).then((navigated) => {
      console.log(navigated ? 'Navigated to /login' : 'Navigation failed');
    });
  }
}


