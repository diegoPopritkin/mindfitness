import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PreloadStrategyService } from './services/preload-strategy.service';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { retryInterceptor } from './interceptors/retry-interceptor';
import { ErrorHandlerService } from './services/error-handler.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadStrategyService)),
    provideAnimationsAsync('noop'),
    provideHttpClient(//Let us use class-based interceptors  
      withInterceptorsFromDi(),
      //List of functional interceptors
      withInterceptors([retryInterceptor]),),
    {provide: ErrorHandler, useClass: ErrorHandlerService}
  ]
};
