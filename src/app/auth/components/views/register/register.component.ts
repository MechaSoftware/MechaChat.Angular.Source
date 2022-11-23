import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injectable,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpService } from '../../../../services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { HttpResponse } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  host: { class: 'app-register' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  formGroup!: FormGroup;
  post: any = '';

  constructor(
    private httpService: HttpService,
    private toastr: ToastrService,
    private spinner: SpinnerVisibilityService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        this.checkPassword,
      ]),
      dateofbirth: new FormControl(null, Validators.required),
    });
  }

  checkPassword(control: { value: any }) {
    let enteredPassword = new String(control.value);
    return enteredPassword.length < 6 ? { requirements: true } : null;
  }

  getErrorEmail() {
    return this.formGroup.get('email')?.hasError('required')
      ? 'Email is required'
      : this.formGroup.get('email')?.hasError('email')
      ? 'Email is invalid'
      : '';
  }

  getErrorUsername() {
    return this.formGroup.get('username')?.hasError('required')
      ? 'Username is required'
      : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password')?.hasError('required')
      ? 'Password is required'
      : this.formGroup.get('password')?.hasError('requirements')
      ? 'Password needs to be at least six characters'
      : '';
  }

  getErrorDOB() {
    return this.formGroup.get('dateofbirth')?.hasError('required')
      ? 'Please enter your date of birth'
      : '';
  }

  registerUser() {
    const salt = bcrypt.genSaltSync(10);
  }

  showAlert(message: string): void {
    this.toastr.error(message, 'Error');
  }
}
