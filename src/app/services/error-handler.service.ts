import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(private router: Router)
   { }
   
  handleError(error: any) {
    if(error instanceof Error) {
      this.router.navigate(['/error']);
    }
  }
}
