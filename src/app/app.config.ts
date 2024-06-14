import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';
import { PreloadStrategyService } from './services/preload-strategy.service';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { retryInterceptor } from './interceptors/retry-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadStrategyService)),
    provideAnimationsAsync('noop'), // disable animations
    provideHttpClient(withInterceptors([retryInterceptor]),),
  ]
};
