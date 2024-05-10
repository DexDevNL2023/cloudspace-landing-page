import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private apiUrl = environment.baseUrl + 'api/about';

  constructor(private http: HttpClient) { }

  getAboutData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
