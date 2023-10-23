import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Admiministrator } from '../model/administrator.interface';

@Injectable({
  providedIn: 'root',
})
export class AdministratorService {
  private baseUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  createAdministrator(administrator: Admiministrator) {
    return this.http.post(`${this.baseUrl}/admin`, administrator);
  }

  getClient(id: number) {
    return this.http.get(`${this.baseUrl}/admin/${id}`);
  }
}
