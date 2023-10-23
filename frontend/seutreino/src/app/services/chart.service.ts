import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getChartData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/dashboard');
  }
}
