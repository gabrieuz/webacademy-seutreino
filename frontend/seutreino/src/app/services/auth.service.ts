import { ClientService } from './client.service';
import { ProfessionalService } from './professional.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professional } from '../model/professional';
import { Client } from '../model/client.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.API_URL;
  idProfessional: any;

  constructor(
    private http: HttpClient,
    public ProfessionalService: ProfessionalService,
    public ClientService: ClientService,
    ) { }

    login(email: string, password: string) {
      console.log('Entrou');
      return this.http.post(`${this.baseUrl}/login/`, { email, password }).pipe(
        // Manipule a resposta para armazenar o token JWT no localStorage
        tap((response: any) => {
          const data = response.data;
          if (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userType', data.userType);
            localStorage.setItem('userId', data.userType === 'professional' ? data.professionalId : data.clientId);
          }
        })
      );
    }
  
    // Método para verificar se o usuário está autenticado com base na presença do token JWT no localStorage
    isAuthenticated(): boolean {
      const token = localStorage.getItem('token');
      return !!token; // Retorna true se o token estiver presente
    }
  
    // Método para fazer logout e remover o token do localStorage
    logout() {
      localStorage.removeItem('token');
    }
  
    getUserInfo() {
      const token = localStorage.getItem('token');
      const userType = localStorage.getItem('userType');
      const userId = localStorage.getItem('userId');
      if (token) {
        if (userType === 'professional') {
          const professional = this.http.get(`${this.baseUrl}/professionals/${userId}`);
          console.log(professional);
          return professional;
        } else if (userType === 'client') {
          const client = this.http.get(`${this.baseUrl}/clients/${userId}`);
          console.log(client);
          return client;
        }
      }
      return null;
    }

  loadUserInfo() {
    const token = localStorage.getItem('token');
    if (token) {
      const user: any = jwtDecode(token)
      if (user.professionalId) {
        this.ProfessionalService.getProfessional(user.professionalId).subscribe({
          next: (data: Professional) => {
            this.saveUsers(data)
            console.log(data)
          }
        });
      } else if (user.clientId) {
        this.ClientService.getClient(user.clientId).subscribe({
          next: (data: Client) => {
            this.saveUsers(data)
            console.log(data)

          }
        });
      }
      return user
    }
    return null
  }

  saveUsers(data: Professional | Client) {
    sessionStorage.setItem("user-info", JSON.stringify(data))
  }

  loadUser(){
    return JSON.parse(sessionStorage.getItem("user-info") ?? '{}')
  }
  
  getUserId(): string | null {
    return localStorage.getItem('userId');
  }
}
