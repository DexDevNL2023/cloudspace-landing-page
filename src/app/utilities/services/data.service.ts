import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environment.baseUrl + 'api';

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/services');
  }

  getAbout(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/about');
  }

  getTestimonials(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/testimonials');
  }
}
