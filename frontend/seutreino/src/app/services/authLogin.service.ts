import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private baseUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/login/admin`, { email, password }).pipe(
      // Manipule a resposta para armazenar o token JWT no localStorage
      tap((response: any) => {
        const token = response.token;
        if (token) {
          localStorage.setItem('token', token);
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
}
