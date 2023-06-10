import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExampleInterceptor implements HttpInterceptor {
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const params = new HttpParams().set(
      'api_key',
      'e9e9d8da18ae29fc430845952232787c'
    );
    const apiKey = httpRequest.clone({ params });
    return next.handle(apiKey);
  }
}
