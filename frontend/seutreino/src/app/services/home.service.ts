import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl = environment.API_URL;

  constructor(private http:HttpClient) { }
  getProfession(){
    return this.http.get<any>(`${this.baseUrl}/professions/`)
  }
}
