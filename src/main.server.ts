import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;

// import { renderApplication } from '@angular/platform-server';
// import { provideRouter } from '@angular/router';
// import { AppComponent } from './app/app.component';
// import { routes } from './app/app.routes';

// export default renderApplication(AppComponent, {
//   document: '<app-root></app-root>', // Root element to render
//   url: '/',                         // Default route to start with
//   providers: [provideRouter(routes)], // Provide routes for the application
// });

