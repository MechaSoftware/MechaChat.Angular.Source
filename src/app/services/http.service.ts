import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import axios, { Axios, AxiosResponse } from 'axios';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpService {
  private baseURL: string = environment.baseURL;
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.apiKey,
    });
  }

  private axios = new Axios({
    headers: {
      Authorization: this.apiKey,
    },
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
        observe: 'response',
      })
      .pipe(catchError((err) => this.errorHandler(err)));
  }

  sendDeleteAsync(path: string): Observable<HttpResponse<any>> {
    return this.http
      .delete(`/api/v1/${path}`, {
        headers: this.createHeaders(),
        observe: 'response',
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
