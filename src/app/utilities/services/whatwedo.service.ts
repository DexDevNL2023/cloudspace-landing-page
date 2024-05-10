import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatwedoService {

  private apiUrl = environment.baseUrl + 'api/service/';

  constructor(private http: HttpClient) { }

  getWhatwedoById(id: number): Observable<any> {
    // Inclure l'ID dans l'URL de l'API
    const url = `${this.apiUrl}${id}`;
    return this.http.get<any>(url);
  }
}
