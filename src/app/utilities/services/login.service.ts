import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.baseUrl + 'api';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const user = { email: email, password: password };
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }

  forgotPassword(email: string): Observable<any> {
    const user = { email: email };
    return this.http.post<any>(`${this.apiUrl}/forgot-password`, user);
  }
}
