<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import axios, { Axios, AxiosResponse } from 'axios';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
=======
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpResponse, HttpHeaders } from "@angular/common/http";
import axios, { Axios, AxiosResponse } from "axios";
import { environment } from "../../environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
>>>>>>> 651e671 (Update design + Start of communties)

@Injectable()
export class HttpService {
  private baseURL: string = environment.baseURL;
<<<<<<< HEAD
  private apiKey: string = environment.apiKey;
=======
  //private apiKey: string = environment.apiKey;
>>>>>>> 651e671 (Update design + Start of communties)

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  createHeaders(): HttpHeaders {
    return new HttpHeaders({
<<<<<<< HEAD
      'Content-Type': 'application/json',
      Authorization: this.apiKey,
=======
      "Content-Type": "application/json",
>>>>>>> 651e671 (Update design + Start of communties)
    });
  }

  private axios = new Axios({
<<<<<<< HEAD
    headers: {
      Authorization: this.apiKey,
    },
=======
>>>>>>> 651e671 (Update design + Start of communties)
    withCredentials: false,
    timeout: 100000,
    maxRedirects: 5,
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  });

  sendGetAsync(path: string) {
    return this.axios.get(`/api/v1/${path}`);
  }

  sendGetFullAsync(path: string) {
    return this.axios.get(`/api/${path}`);
  }

  sendPostAsync(path: string, body: any, options?: any) {
    if (options) {
      return this.axios.post(`/api/v1/${path}`, body, options);
    } else {
      return this.axios.post(`/api/v1/${path}`, body);
    }
  }

  sendPutAsync(path: string, body: any): Observable<HttpResponse<any>> {
    return this.http
      .put(`/api/v1/${path}`, body, {
        headers: this.createHeaders(),
<<<<<<< HEAD
        observe: 'response',
=======
        observe: "response",
>>>>>>> 651e671 (Update design + Start of communties)
      })
      .pipe(catchError((err) => this.errorHandler(err)));
  }

  sendDeleteAsync(path: string): Observable<HttpResponse<any>> {
    return this.http
      .delete(`/api/v1/${path}`, {
        headers: this.createHeaders(),
<<<<<<< HEAD
        observe: 'response',
=======
        observe: "response",
>>>>>>> 651e671 (Update design + Start of communties)
      })
      .pipe(catchError((err) => this.errorHandler(err)));
  }

  private errorHandler(error: HttpErrorResponse) {
    let errorMessage = `An error occurred. Please try again later.`;

    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error}`;
    } else {
      if (error.status === 403) {
        errorMessage = error.error;
      } else if (error.status === 404) {
        errorMessage = error.error;
      } else {
        errorMessage = `An error occurred. Please try again later.`;
      }
    }

    return throwError(new Error(errorMessage));
  }
}
