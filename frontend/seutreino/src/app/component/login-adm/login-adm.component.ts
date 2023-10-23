  import { Component } from '@angular/core';
  import { Router } from '@angular/router'; // Importe o Router
  import { ToastrService } from 'ngx-toastr';
  import { AuthService } from 'src/app/services/auth.service';
  import { AuthLoginService } from 'src/app/services/authLogin.service'; 
  @Component({
    selector: 'app-login',
    templateUrl: './login-adm.component.html',
    styleUrls: ['./login-adm.component.css']
  })
  export class LoginAdmComponent {
    email: string = '';
    password: string = '';
    errorMessage: string = ''; // Mensagem de erro

    constructor(
      private authLoginService: AuthLoginService, 
      private router: Router,
      private toastr: ToastrService) { }

    onSubmit() {
      console.log(this.email,this.password)
      this.authLoginService.login(this.email, this.password).subscribe({
        next: (response: any) => {

          this.toastr.success('Login realizado com sucesso!', 'Sucesso');
          console.log('Login bem-sucedido');
          this.router.navigate(['/logged-client']); 
        },
        error: (error) => {

          this.toastr.error('Email ou senha invalidas.', 'Erro');
          console.error('Erro no login:', error);

        }
      });
    }

  }