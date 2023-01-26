<<<<<<< HEAD
import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const userTokens = this.authService.getTokens();

    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + userTokens.accesstoken,
      },
    });

    return next.handle(req);
  }
}
=======
import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const userTokens = this.authService.getTokens();

    req = req.clone({
      setHeaders: {
        Authorization: 'User ' + userTokens.accesstoken,
      },
    });

    return next.handle(req);
  }
}
>>>>>>> 651e671 (Update design + Start of communties)
