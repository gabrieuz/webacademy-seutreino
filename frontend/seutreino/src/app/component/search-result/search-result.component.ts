// search-result.component.ts
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { AppointmentsService } from 'src/app/services/appointments.service'; 
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/model/client.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent {
  serviceOrProfessional: string = '';
  location: string = '';
  isResearchComponentVisible = false;
  isTextVisible = true;

  announcements: any[] = [];
  announcementsNotFilter: any[] = [];
  diasDaSemana: string[] = [];
  datasDaSemana: string[] = [];

  enderecoUsuario: string = '';

  constructor(
    private messageService: MessageService,
    private announcementService: AnnouncementService,
    private appointmentsService: AppointmentsService,
    private clientService: ClientService,
    private router: Router,
  ) {}

  profession: string = '';
  city: string = '';

  
  ngOnInit() {
    this.clientService
      .getClientById(localStorage.getItem('userId') || '')
      .subscribe(
        (data: Client | any) => {
          console.log(data);
          this.enderecoUsuario = `${data.street}, ${data.city} - ${data.state}`;
        },
        (error) => {
          console.error('Erro ao buscar informações do cliente:', error);
        },
        () => {
          console.log('Solicitação de informações do cliente concluída.');
        }
      );
  }

  getGoogleMapsUrl(address: string): string {
    const baseUrl = 'https://www.google.com/maps/embed';
    const queryParams = `?q=${encodeURIComponent(address)}`;
    const iframeUrl = `${baseUrl}${queryParams}`;
    return iframeUrl;
  }

  performSearch() {
    this.profession = this.serviceOrProfessional;
    this.city = this.location;

    if (!this.city || !this.profession) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro ao pesquisar.',
        detail: `Todos os campos devem estar preenchidos.`,
      });
      return;
    } else {
      this.diasDaSemana = this.obterDiasDaSemana();
      this.datasDaSemana = this.obterDatasDaSemana();
      this.searchAnnouncement(this.profession, this.city);
    }
  }
  searchAnnouncement(profession: string, city: string) {
    this.ngOnDestroy();
    this.announcementService.getAnnouncement().subscribe((data) => {
      console.log(data);

      this.announcementsNotFilter = data;

      this.announcements = this.announcementsNotFilter.filter(
        (announcement) => {
          console.log('antes de filtrar', this.announcements);
          const announcementText = `${announcement.profession.name} ${announcement.city}`;
          return (
            announcementText.toLowerCase().includes(profession.toLowerCase()) ||
            announcementText.toLowerCase().includes(city.toLowerCase())
          );
        }
      );
      console.log('depois de filtrar', this.announcements);
      if (this.announcements.length == 0) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Erro ao pesquisar.',
          detail: `Nenhum anúncio corresponde a sua pesquisa.`,
        });
      }
    });
  }
  ngOnDestroy() {
    //limpando a lista
    this.announcements = [];
  }

  groupAvailableTimesByDay(announcement: any) {
    const groupedTimes: any = {};

    const daysOfWeek = [
      'MONDAY',
      'TUESDAY',
      'WEDNESDAY',
      'THURSDAY',
      'FRIDAY',
      'SATURDAY',
    ];

    daysOfWeek.forEach((day) => {
      groupedTimes[day] = announcement.announcementAvailableTimes
        .filter((timeSlot: any) => timeSlot.day === day)
        .map((timeSlot: any) => (timeSlot.isAvaible ? timeSlot.hour : '-'));
    });

    return groupedTimes;
  }
  // Função para obter os dias da semana
  obterDiasDaSemana(): string[] {
    const daysOfWeek = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
    return daysOfWeek;
  }

  // Função para obter as datas da semana com base no dia da semana atual
  obterDatasDaSemana(): string[] {
    // const diasDaSemana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
    const datasDaSemana: string[] = [];
    const hoje = new Date();

    for (let i = 1; i < 7; i++) {
      const data = new Date(hoje);
      data.setDate(hoje.getDate() + (i - hoje.getDay()));

      const dia = data.getDate();
      const mes = data.getMonth() + 1;
      const dataFormatada = `${dia.toString().padStart(2, '0')}/${mes
        .toString()
        .padStart(2, '0')}`;
      datasDaSemana.push(dataFormatada);
    }

    return datasDaSemana;
  }

  selectedDay: string | null = null;
  selectedHour: string | null = null;
  selectedProfessionalId: string | null = null;
  portugueseDay: string | null = null;
  announcement: any = null;

  abrirModal(
    day: string,
    hour: string,
    professionaId: string,
    announcement: any
  ) {
    console.log(day, hour, professionaId, announcement);
    this.selectedHour = hour;
    this.selectedProfessionalId = professionaId;
    this.selectedDay = day;
    this.announcement = announcement;
    
    switch (day) {
      case 'MONDAY':
        this.portugueseDay = 'Segunda-feira';
        break;
      case 'TUESDAY':
        this.portugueseDay = 'Terça-feira';
        break;
      case 'WEDNESDAY':
        this.portugueseDay = 'Quarta-feira';
        break;
      case 'THURSDAY':
        this.portugueseDay = 'Quinta-feira';
        break;
      case 'FRIDAY':
        this.portugueseDay = 'Sexta-feira';
        break;
      case 'SATURDAY':
        this.portugueseDay = 'Sábado';
        break;
      default:
        this.portugueseDay = null;
        break;
    }
  }
  clientId: string = localStorage.getItem('userId') || 'Anonynous';

  confirmarAgendamento() {
    const appointment = {
      professionalId: this.selectedProfessionalId,
      clientId: this.clientId,
      day: this.selectedDay,
      hour: this.selectedHour,
      date: new Date(),
    };


    this.appointmentsService.createAppointment(appointment).subscribe(
      (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Agendamento realizado com sucesso.',
          detail: `Seu agendamento foi realizado com sucesso.`,
        });

        const announcementAvailableTimes =
          this.announcement.announcementAvailableTimes;

        const announcementAvailableTimesWithoutSelectedTime =
          announcementAvailableTimes.filter((timeSlot: any) => {
            return !(
              timeSlot.day === this.selectedDay &&
              timeSlot.hour === this.selectedHour
            );
          });

        const announcementUpdated = {
          ...this.announcement,
          announcementAvailableTimes:
            announcementAvailableTimesWithoutSelectedTime,
        };

        this.announcementService
          .updateAnnouncement(announcementUpdated.id, announcementUpdated)
          .subscribe(
            (data) => {
              console.log(data);
              this.searchAnnouncement(this.profession, this.city);
            },
            (error) => {
              console.log(error);
            }
          );
      },
      (error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao agendar.',
          detail: `Não foi possível realizar o agendamento.`,
        });
      }
    );
  }
  navigateToProfessionalProfile(professionalId: number) {
    this.router.navigate(['profile-professional', professionalId]);
  }
}