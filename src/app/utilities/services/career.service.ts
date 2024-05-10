import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  private apiUrl = environment.baseUrl + 'api/career';

  constructor(private http: HttpClient) { }

  getCareerData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
