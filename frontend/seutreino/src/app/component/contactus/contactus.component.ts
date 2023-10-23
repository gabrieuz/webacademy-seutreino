import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { Contactus } from 'src/app/model/contactus';
import { ContactusService } from 'src/app/services/contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  record: Contactus = <Contactus>{};
  isSubmiting: boolean = false;
  constructor(
    private contactusService: ContactusService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient
  ) { }
  submit(form: NgForm): void {
    this.isSubmiting = true;
    this.contactusService
      .createContactus(this.record)
      .pipe(
        catchError((error) => {
          this.toastr.error("Ocorreu um erro!.", "Erro");
          this.isSubmiting = false;
          return throwError(() => error);

        })
      )
      .subscribe({
        complete: () => {
          this.toastr.success("Contato realizado com sucesso!", "Sucesso");
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

}
