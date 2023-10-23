import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/model/client.interface';
import { IForm } from 'src/app/i-form';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css'],
})
export class FormClientComponent implements IForm<Client> {
  registro: Client = <Client>{};
  isSubmitting: boolean = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient
  ) { }

  submit(form: NgForm): void {
    this.isSubmitting = true;
    this.clientService
      .createClient(this.registro)
      .pipe(
        catchError((error) => {
          this.toastr.error('Ocorreu um erro ao cadastrar o cliente.', 'Erro');
          this.isSubmitting = false;
          return throwError(() => error);
        })
      )
      .subscribe({
        complete: () => {
          this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso');
          this.router.navigateByUrl('/login');
        },
      });
    // this.isSubmitting = true;
    // this.clientService
    //   .createClient(this.registro)
    //   .pipe(
    //     catchError((error) => {
    //       this.toastr.error('Ocorreu um erro ao cadastrar o cliente.', 'Erro');
    //       this.isSubmitting = false;
    //       return throwError(() => error);
    //     })
    //   )
    //   .subscribe({
    //     complete: () => {
    //       this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso');
    //       this.router.navigateByUrl('/login');
    //     },
    //   });
  }

  // Aplicar a máscara ao campo de telefone
  phoneMask(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = this.formatPhone(inputElement.value);
  }

  // Formatar o telefone com a máscara
  formatPhone(phone: string): string {
    return phone
      .replace(/\D/g, '')
      .replace(/^(\d)/, '($1')
      .replace(/^(\(\d{2})(\d)/, '$1) $2')
      .replace(/(\d{5})(\d{1,4})/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  }

  // Aplicar a máscara ao campo de CEP
  cepMask(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = this.formatCep(inputElement.value);
  }

  // Formatar o CEP com a máscara
  formatCep(cep: string): string {
    return cep
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d{1,3})/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  }

  // Buscar dados do endereço a partir do CEP usando a API ViaCEP
  fetchAddressByCep(cep: string): void {
    cep = cep.replace(/\D/g, ''); // Remove os caracteres não numéricos
    if (cep.length === 8) { // Verifica se tem 8 dígitos
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      this.http.get(url).subscribe((data: any) => {
        if (!data.erro) {
          // Atualiza os campos de endereço com os dados retornados
          this.registro.street = data.logradouro;
          this.registro.city = data.localidade;
          this.registro.state = data.uf;
        }
      });
    }
  }
  
}
