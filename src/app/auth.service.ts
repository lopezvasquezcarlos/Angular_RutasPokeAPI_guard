import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  //private apiUrl = 'https://fakestoreapi.com/auth/login';

  constructor(private http: HttpClient,private router: Router) { }

  login(username: string, password: string): Observable<any> {
    const apiUrl = 'https://fakestoreapi.com/auth/login';
    return this.http.post(apiUrl, { username, password }).pipe(
    tap((response: any) => {
    if (response.token) {
    localStorage.setItem('token', response.token);
    this.isAuthenticated = true;
    }
    }),
    catchError(() => of(false))
    );
    }


    isLoggedIn(): boolean {
      return this.isAuthenticated || !!localStorage.getItem('token');
      }

      logout(): void {
        this.isAuthenticated = false;
        localStorage.removeItem('token');
        }
}
