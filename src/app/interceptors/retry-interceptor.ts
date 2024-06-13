import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { timer, retry } from "rxjs";

export const retryInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  return next(req).pipe(retry({ count: 1, delay: shouldRetry }))

  function shouldRetry(error: HttpErrorResponse) {
    if (error.status >= 500) {
      return timer(1000);
    }
    throw error;
  }
}