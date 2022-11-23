import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injectable,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../../../services/http.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { map, Observable } from 'rxjs';
import { Md5 } from 'ts-md5';
import { Byte } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: { class: 'app-login' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  currentUser = {};
  loggingIn: Boolean = false;
  static currentUser: string;

  constructor(
    private httpService: HttpService,
    private toastr: ToastrService,
    public router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      window.location.href = '/app/dashboard/home';
    }

    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        this.checkPassword,
      ]),
    });
  }

  async authenticateUser() {
    this.loggingIn = true;

    const loginData = new FormData();
    loginData.append('EmailAddress', this.formGroup.value.email);
    loginData.append('Password', this.formGroup.value.password);

    await this.httpService
      .sendPostAsync(`users/login`, loginData)
      .then((response) => {
        var userData = JSON.parse(response.data).accountStore;
        var tokenData = JSON.parse(response.data).tokenStore;

        this.authService.setUserData(userData);
        this.authService.setTokens(tokenData.jwtoken, tokenData.accesstoken);

        localStorage.setItem('AccountStore', JSON.stringify(userData));
        localStorage.setItem('TokenStore', JSON.stringify(tokenData));

        window.location.href = '/app/dashboard/home';
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          if (error.response.status == 403) {
            return this.showAlert(JSON.parse(error.response.data)['Message']);
          } else if (error.response.status == 404) {
            return this.showAlert(JSON.parse(error.response.data)['Message']);
          }
        } else {
          return this.showAlert('An error occurred. Please try again later.');
        }
      });
  }

  getErrorEmail() {
    return this.formGroup.get('email')?.hasError('required')
      ? 'Email is required'
      : this.formGroup.get('email')?.hasError('email')
      ? 'Email is invalid'
      : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password')?.hasError('required')
      ? 'Password is required'
      : this.formGroup.get('password')?.hasError('requirements')
      ? 'Password needs to be at least six characters'
      : '';
  }

  checkPassword(control: { value: any }) {
    let enteredPassword = new String(control.value);

    return enteredPassword.length < 6 ? { requirements: true } : null;
  }

  showAlert(message: string): void {
    this.toastr.error(message, 'Error');
  }
}
