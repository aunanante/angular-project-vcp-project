import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

const AUTH_API = environment.authApi;

@Injectable({
  providedIn: 'root'
})
export class ReglogService {

  constructor(private http: HttpClient) { }
  public register(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      AUTH_API + 'register',
      user,
      { headers }
    );
  }

  public login(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'login', user)
  }

  /*  logout(): void {
    localStorage.removeItem('accessToken');
  }

  getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }

  isLoggedIn(): boolean {
    return this.getAccessToken() !== null;
  } */

}
