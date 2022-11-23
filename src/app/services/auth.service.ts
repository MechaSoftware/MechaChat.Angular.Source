import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../shared/IUser';
import { HttpService } from './http.service';
import { ToastrService } from 'ngx-toastr';

let userData: any = {};
let userTokens: any = {};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpService: HttpService,
    public router: Router,
    private toastr: ToastrService
  ) {}

  setTokens(jwtoken: string, accesstoken: string) {
    userTokens.jwtoken = jwtoken;
    userTokens.accesstoken = accesstoken;

    localStorage.setItem('TokenStore', JSON.stringify(userTokens));
  }

  getTokens() {
    return JSON.parse(localStorage.getItem('TokenStore') || '{}');
  }

  setUserData(data: any) {
    userData = data;

    localStorage.setItem('AccountStore', JSON.stringify(userData));
  }

  getUserData() {
    return JSON.parse(localStorage.getItem('AccountStore') || '{}');
  }

  get isLoggedIn(): boolean {
    let userData1 = localStorage.getItem('AccountStore');

    return userData1 !== null ? true : false;
  }

  get isTokenExpired(): boolean {
    let expiry = JSON.parse(atob(this.getTokens().jwtoken!.split('.')[1])).exp;

    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }

  doLogout() {
    let removeAccountStore = localStorage.removeItem('AccountStore');
    localStorage.removeItem('TokenStore');

    if (removeAccountStore == null) {
      window.location.href = '/auth/login';
    }
  }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | Observable<boolean>> {
    if (this.isLoggedIn !== true) {
      window.location.href = '/auth/login';
    }

    if (this.isTokenExpired === true) {
      this.doLogout();
    } else {
      var userId = this.getUserData().userid;
      var emailAddress = this.getUserData().emailaddress;
      var accesstoken = this.getTokens().accesstoken;

      const userData1 = new FormData();
      userData1.append('UserId', userId);
      userData1.append('EmailAddress', emailAddress);
      userData1.append('UserAccessToken', accesstoken);

      await this.httpService
        .sendPostAsync(`users/refreshtoken`, userData1)
        .then((response) => {
          var userRData = JSON.parse(response.data).accountStore;
          var tokenData = JSON.parse(response.data).tokenStore;

          this.setUserData(userRData);
          this.setTokens(tokenData.jwtoken, tokenData.accesstoken);
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            if (error.response.status == 403) {
              window.location.href = '/auth/login';
            } else if (error.response.status == 404) {
              window.location.href = '/auth/login';
            }
          } else {
            return this.showAlert('An error occurred. Please try again later.');
          }
        });
    }

    return true;
  }

  showAlert(message: string): void {
    this.toastr.error(message, 'Error');
  }
}
