import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = environment.baseUrl + 'api/contact';

  constructor(private http: HttpClient) { }

  getContactData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
