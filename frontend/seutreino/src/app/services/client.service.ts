import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private baseUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  createClient(client: Client) {
    return this.http.post(`${this.baseUrl}/clients`, client);
  }

  getClient(id: number): Observable <Client>{
    return this.http.get <Client>(`${this.baseUrl}/clients/${id}`);
  }
  getName(name: string) {
    return this.http.get(`${this.baseUrl}/clients/${name}`);
  }

  getClientById(id: string) {
    return this.http.get(`${this.baseUrl}/clients/${id}`);
  }
}
