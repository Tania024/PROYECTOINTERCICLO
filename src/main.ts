import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


import { initializeApp } from 'firebase/app';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // Inicializa Firebase con la configuración
initializeApp(environment.firebaseConfig);
