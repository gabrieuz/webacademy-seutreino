import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from './../../services/client.service';
import { ProfessionalService } from './../../services/professional.service';
import { CommentsComponent } from './../comments/comments.component';
import { Component, Type, ViewEncapsulation, OnInit } from '@angular/core';
import { AboutProfessionalComponent } from '../about-professional/about-professional.component';
import { ServicesProfessionalComponent } from '../services-professional/services-professional.component';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Professional } from 'src/app/model/professional';
@Component({
  selector: 'app-profile-professional',
  templateUrl: './profile-professional.component.html',
  styleUrls: ['./profile-professional.component.css'],

})
export class ProfileProfessionalComponent implements OnInit {

  activeItem: MenuItem | undefined;

  idProfessional!: any;
  professional!: any;
  listProfession?: Professional[];

  constructor(
    public AuthService: AuthService,
    public ProfessionalService: ProfessionalService,
    public ClientService: ClientService,
    public ActivatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((paraments) => {
      console.log(paraments)
      this.ProfessionalService.getProfessional(paraments["idProfissional"]).subscribe({
        next: (data) => {
          this.professional = data;
          console.log(this.professional);
        }
      })
    })
  }

  carregar() {
    console.log(this.idProfessional)
    this.ProfessionalService.getProfessional(this.idProfessional.professionalId).subscribe({
      next: (data) => {
        this.professional = data;
        console.log(this.professional);
      }
    });
  }

}
