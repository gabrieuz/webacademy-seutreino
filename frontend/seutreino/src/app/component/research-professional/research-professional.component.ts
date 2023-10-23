import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { HomeComponent } from '../home/home.component';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-research-professional',
  templateUrl: './research-professional.component.html',
  styleUrls: ['./research-professional.component.css']
})
export class ResearchProfessionalComponent implements OnInit {
  announcements: any[] = [];
  announcementsNotFilter: any[] = [];
  diasDaSemana: string[] = [];
  datasDaSemana: string[] = [];

  constructor(private announcementService: AnnouncementService,
    private homeComponent: HomeComponent,
    private messageService: MessageService) { }


  ngOnInit() {
    this.diasDaSemana = this.obterDiasDaSemana();
    this.datasDaSemana = this.obterDatasDaSemana();
    const profession = this.homeComponent.profession;
    const city = this.homeComponent.city;

    this.searchAnnouncement(profession, city);
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
