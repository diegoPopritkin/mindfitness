import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloadStrategyService implements PreloadingStrategy {

  constructor() { }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if(route.data?.['alwaysPreload'] || true) {
      console.info("preload " + route.path)
      return fn()
    }
    else
      return of(null);
  }
}


