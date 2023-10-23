import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private baseUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getTags() {
    return this.http.get<any[]>(`${this.baseUrl}/tag`);
  }
}
