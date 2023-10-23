import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AnnouncementService } from 'src/app/services/announcement.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  serviceOrProfessional: string = '';
  location: string = '';
  isResearchComponentVisible = false;
  isTextVisible = true;

  announcements: any[] = [];
  announcementsNotFilter: any[] = [];
  diasDaSemana: string[] = [];
  datasDaSemana: string[] = [];

  constructor(private messageService: MessageService,
    private announcementService: AnnouncementService,
  ) { }
  profession: string = '';
  city: string = '';

  performSearch() {
    this.profession = this.serviceOrProfessional;
    this.city = this.location;

    if (!this.city ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro ao pesquisar.',
        detail: `Adicione uma cidade.`,
      });
      return;
    }
    else{
      this.diasDaSemana = this.obterDiasDaSemana();
      this.datasDaSemana = this.obterDatasDaSemana();
      this.searchAnnouncement(this.profession,this.city);
    }

  }
  searchAnnouncement(profession: string, city: string) {
    this.ngOnDestroy()
    this.announcementService.getAnnouncement().subscribe((data) => {
      console.log(data)

      this.announcementsNotFilter = data

      this.announcements = this.announcementsNotFilter.filter((announcement) => {
        console.log("antes de filtrar", this.announcements)
        const announcementText = `${announcement.profession.name} ${announcement.city}`;
        return announcementText.toLowerCase().includes(profession.toLowerCase()) ||
          announcementText.toLowerCase().includes(city.toLowerCase());
      });
      console.log("depois de filtrar", this.announcements)
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


    const daysOfWeek = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

    daysOfWeek.forEach((day) => {
      groupedTimes[day] = announcement.announcementAvailableTimes
        .filter((timeSlot: any) => timeSlot.day === day)
        .map((timeSlot: any) => timeSlot.isAvaible ? timeSlot.hour : '-');
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
      const dataFormatada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}`;
      datasDaSemana.push(dataFormatada);
    }

    return datasDaSemana;
  }


}

  

