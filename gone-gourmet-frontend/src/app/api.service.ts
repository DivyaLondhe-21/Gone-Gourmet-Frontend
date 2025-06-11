import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5178/api'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  getBrands(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/brands`);
  }

  getCities(brand: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/cities?brand=${brand}`);
  }

  getUnavailableItems(request: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/unavailable-items`, request);
  }
}