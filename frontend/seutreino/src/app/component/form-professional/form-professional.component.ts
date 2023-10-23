import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { Professional } from 'src/app/model/professional';
import { ProfessionalService } from 'src/app/services/professional.service';

@Component({
  selector: 'app-form-professional',
  templateUrl: './form-professional.component.html',
  styleUrls: ['./form-professional.component.css']
})
export class FormProfessionalComponent {
  record :Professional = <Professional>{};
  isSubmiting: boolean = false;
  constructor(
    private professionalService: ProfessionalService,
    private router : Router,
    private toastr: ToastrService,
    private http: HttpClient
    ){ }

  submit(form: NgForm): void{
    this.isSubmiting = true;
    this.professionalService
    .createCliente(this.record)
    .pipe(
      catchError((error)=>{
        this.toastr.error("Ocorreu um erro ao cadastrar.","Erro");
        this.isSubmiting = false;
        return throwError(()=> error);

       })
    )
    .subscribe({
      complete: ()=>{
        this.toastr.success("Cadastro realizado com sucesso!","Sucesso");
        this.router.navigateByUrl("/login")
      }
    });
  }
  // mascara ao campo telefone
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
          this.record.street = data.logradouro;
          this.record.city = data.localidade;
          this.record.state = data.uf;
  
      }});
    }
  }
  
}




