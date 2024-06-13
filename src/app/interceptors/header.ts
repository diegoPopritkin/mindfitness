import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor, HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';


@Injectable()
export class CommunicatorInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = this.setHeader(request);

        return next.handle(request)
        // // Watch the response
        // .pipe(
        //   tap({
        //     next: (event) => {
        //       if (event instanceof HttpResponse) {
        //         this.timeElapsed(request, started);
        //       }
        //     },
        //     error: (err: HttpErrorResponse) => {
        //       this.timeElapsed(request, started);
        //     }
        //   }),
        // );
    }

    private setHeader(request: any) {
        request = request.clone({
            setHeaders: {
                'ajaxRequest': 'true',
                'Content-type': 'application/json; charset=utf-8',
                'cdata': 'false',
                'Accept': 'application/json'
            }
        });
        if (request.body.op === 'pre-login') {
            request = request.clone({ setHeaders: { 'pre-login': 'pre-login' } });
            delete request.body.op;

            if (request.body.preLoginFlow) {
                request = request.clone({ setHeaders: { 'pre-login-flow': request.body.preLoginFlow } });
                delete request.body.preLoginFlow;
            }
            return request;
        }
    }
}
