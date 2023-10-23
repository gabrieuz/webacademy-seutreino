import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { Admiministrator } from 'src/app/model/administrator.interface';
import { Professional } from 'src/app/model/professional';
import { AdministratorService } from 'src/app/services/administrator.service';

@Component({
  selector: 'app-form-adm',
  templateUrl: './form-adm.component.html',
  styleUrls: ['./form-adm.component.css']
})
export class FormAdmComponent {
  record: Admiministrator = <Professional>{};
  isSubmiting: boolean = false;
  constructor(
    private http: HttpClient,
    private Administrator: AdministratorService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  submit(form: NgForm): void {
    this.isSubmiting = true;
    this.Administrator
      .createAdministrator(this.record)
      .pipe(
        catchError((error) => {
          this.toastr.error("Ocorreu um erro ao cadastrar.", "Erro");
          this.isSubmiting = false;
          return throwError(() => error);

        })
      )
      .subscribe({
        complete: () => {
          this.toastr.success("Cadastro realizado com sucesso!", "Sucesso");
          this.router.navigateByUrl("/login-adm")
        }
      });
  }
}
