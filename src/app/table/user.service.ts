import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  apiUrl: string = 'https://dummyapi.io/data/api/user';
  appId = '60e0b1ee2f8b5e182f1850eb';
  pageParam = '0';
  limitParam = '50';
  constructor(private http: HttpClient) { }

  getUsers(){
        return this.http.get(this.apiUrl,{ headers: { 'app-id': this.appId },
                                            params: {'page': this.pageParam, 'limit': this.limitParam}
                                          }
                            )
                            .pipe(
                              map((data: User[]) => {
                                return data;
                              }), catchError( this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
