import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';




export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"biblioteca-1cef3","appId":"1:171880266323:web:23114de3a187be3ccb24a6","storageBucket":"biblioteca-1cef3.appspot.com","apiKey":"AIzaSyCFK6aDLU7aYcnrvU_bHo6xDtmcsIKzteg","authDomain":"biblioteca-1cef3.firebaseapp.com","messagingSenderId":"171880266323"})), provideFirestore(() => getFirestore())]
};
