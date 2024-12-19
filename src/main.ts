// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

  import { bootstrapApplication } from '@angular/platform-browser';
  import { provideHttpClient } from '@angular/common/http';
  import { provideRouter } from '@angular/router';
  import { AppComponent } from './app/app.component';
  import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
  
  bootstrapApplication(AppComponent, {
<<<<<<< HEAD
    providers: [provideRouter(routes), provideHttpClient(), ],
=======
    providers: [provideRouter(routes), provideHttpClient()],
>>>>>>> 2d6d3b7630ecd6952a74fea2c02bc4167ef1bf01
  }).catch((err) => console.error(err));

