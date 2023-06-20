import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.authService?.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token,
        },
      });
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) this.router.navigate(['home']);
        if (error.status == 403) this.router.navigate(['logout']);

        //let title = "Erreur de connexion :";
        let title = '';
        let details = '';
        if (error.status == 0) {
          details = 'Erreur de connexion au serveur.';
        } else {
          if (error.error instanceof ErrorEvent) {
            // Frontend exception
            title = `${error.error.message} :`;
            details =
              "L'application n'a pas pu se connecter au server. Merci de réessayer ultérieurement ou de contacter l'admistrateur";
          } else {
            // Backend exception
            let errorDetails = error.error.details;
            title = `${error.error.message} :`;
            for (let msg in errorDetails) {
              details += errorDetails[msg];
            }
          }
        }
        this.toastService.errorToast(details);
        return throwError(() => new Error(details));
      })
    );
  }
}
