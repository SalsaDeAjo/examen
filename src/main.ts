import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideFirebaseApp(() => initializeApp({
      "projectId": "examen-5c613",
      "appId": "1:720323232101:web:7af52ff064a1af3c93218c",
      "storageBucket": "examen-5c613.appspot.com",
      "apiKey": "AIzaSyBBHUI7jGjKt61ZU5f8_JPbr9p9N8MIpNc",
      "authDomain": "examen-5c613.firebaseapp.com",
      "messagingSenderId": "720323232101"
    })),
    provideAuth(() => getAuth()),  // Aquí proporciona la autenticación directamente
  ],
})
  .catch(err => console.error(err));






