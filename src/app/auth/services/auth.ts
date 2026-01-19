
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>('YOUR_API_LOGIN_URL', credentials).pipe(
      tap(response => {
        if (response && response.token) {
          this.storeToken(response.token);
        }
      })
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>('YOUR_API_REGISTER_URL', userData).pipe(
      tap(response => {
        if (response && response.token) {
          this.storeToken(response.token);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; 
  }

  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }
}
