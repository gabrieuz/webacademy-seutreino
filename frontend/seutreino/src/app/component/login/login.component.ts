import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = ''; // Mensagem de erro

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    console.log(this.email, this.password);
    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        this.toastr.success('Login realizado com sucesso!', 'Sucesso');

        // Verificar o tipo de usuário na resposta
        const userType = response.data.userType
        this.authService.loadUserInfo()
        // console.log('Tipo de usuário:', this.authService.loadUser());
        
        // Navegar para a rota apropriada com base no tipo de usuário
        if (userType === 'client') {
          this.router.navigate(['logged-client']);
        } else if (userType === 'professional') {
          this.router.navigate(['/logged-professional']);
        }
      },
      error: (error) => {
        this.toastr.error('Email ou senha invalidas.', 'Erro');
        console.error('Erro no login:', error);
      }
    });
  }
}
