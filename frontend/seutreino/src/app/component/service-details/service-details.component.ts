import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, of, switchMap, throwError } from 'rxjs';
import { Announcement } from 'src/app/model/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  record: Announcement = <Announcement>{};

  isSubmiting: boolean = false;
  professions: any[] = [];
  professional: any;
  expertises: any[] = [];
  levels: any[] = [];
  urls!: string;

  constructor(
    private annoucementService: AnnouncementService,
    private authService: AuthService,
    private messageService: MessageService,
    private router : Router

  ) { }

  ngOnInit(): void {
    this.getProfessions();
    this.getExpertises();
    this.getLevels();
    this.getAvaibleTimes();

  }

  getProfessions() {
    this.annoucementService.getProfessions().subscribe((data) => {
      this.professions = data;
    });
  }

  getExpertises() {
    this.annoucementService.getExpertises().subscribe((data) => {
      this.expertises = data;
    });
  }

  getLevels() {
    this.annoucementService.getLevels().subscribe((data) => {
      this.levels = data;
    });
  }

  getProfessionalId() {
    return this.authService.getUserInfo()?.pipe(
      catchError((error) => {
        console.log('Erro ao obter informações do usuário:', error);
        return throwError(() => error);
      }),
      switchMap((data) => {
        this.professional = data;
        this.record.professionalId = this.professional.id;
        return this.professional ? of(this.professional.id) : of(null);
      })
    );
  }

  getAvaibleTimes() {
    this.getProfessionalId()?.subscribe((profeId) => {
      if (profeId !== null) {
        console.log(profeId)
        this.annoucementService.getAvailableTimes().subscribe((data) => {
          const filteredData = data.filter((item) => item.professionalId === profeId);
          this.record.announcementAvailableTimes = filteredData;
        });
      }
    });
  }

  submit() {
    // this.isSubmiting = true;
    if (this.record === null) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro .',
        detail: `Preencha todos os campos`,
      });
    }
    const urlListString = this.record.gallery

    const urlListArray = urlListString.split(',');

    const gallery = urlListArray.map((url) => ({ url }));

    const jsonResult = gallery;
    this.record.gallery = jsonResult;
    //ajuste para poder cse conenctar com o level e expertises
    const expertisesArray = this.record.expertises.split(',');
    const expertises = expertisesArray.map((id) => ({ id }));
    this.record.expertises = expertises;
    
    const levelsArray = this.record.levels.split(',');
    const levels = levelsArray.map((id) => ({ id }));
    this.record.levels = levels;

    this.annoucementService
      .creatAnnouncement(this.record)
      .pipe(
        catchError((error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro ao criar anúncio.',
            detail: `Erro ao criar seu anúncio verifique as informações.`,
          });
          return throwError(() => error);
        })
      )
      .subscribe({
        complete: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso ao criar.',
            detail: `Seu anúncio for criado com sucesso`,
          });
          this.router.navigateByUrl("/logged-professional")
        }
      });
  }
}
