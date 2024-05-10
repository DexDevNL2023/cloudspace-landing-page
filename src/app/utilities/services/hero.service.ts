import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private apiUrl = environment.baseUrl + 'api/hero';

  constructor(private http: HttpClient) { }

  getHeroData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
