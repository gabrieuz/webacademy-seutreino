import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Professional } from '../model/professional';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  private baseUrl = environment.API_URL;

  constructor(private http:HttpClient) { }
  createCliente(professional: Professional){
    return this.http.post(`${this.baseUrl}/professionals`, professional);
  }
  getProfessional(id:string): Observable <Professional>{
    return this.http.get <Professional>(`${this.baseUrl}/professionals/${id}`);
  }
}
