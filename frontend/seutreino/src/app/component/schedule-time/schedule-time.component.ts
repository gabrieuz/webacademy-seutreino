import { Component, OnInit } from '@angular/core';
import { AvailableTime } from 'src/app/model/available-times.interface';
import { AvailableTimesService } from 'src/app/services/available-times.service';
import { MessageService } from 'primeng/api';
import { ProfessionalService } from 'src/app/services/professional.service';
interface Professional {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  gender?: string;
  birthDate?: string;
  cep?: string;
  street?: string;
  state?: string;
  city?: string;
  phone?: string;
  profilePicture?: string | null;
  socialMedia?: string | null;
  role?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

@Component({
  selector: 'app-schedule-time',
  templateUrl: './schedule-time.component.html',
  styleUrls: ['./schedule-time.component.css'],
})
export class ScheduleTimeComponent implements OnInit {
  constructor(
    private availableTimesService: AvailableTimesService,
    private messageService: MessageService,
    private professionalService: ProfessionalService
  ) {}

  // professionalId is get from localStorage
  professionalId: string = localStorage.getItem('userId') || 'Anonynous';

  ngOnInit(): void {
    this.loadAvailableTimes();
    this.getProfessionalInfo();
  }

  availableTimes: AvailableTime[] = [];
  checkboxState: { [key: string]: boolean } = {};
  newHour: string = '';

  daysOfWeek: string[] = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY',
  ];

  loadAvailableTimes() {
    this.availableTimesService
      .getAvailableTimes(this.professionalId)
      .subscribe((result) => {
        this.availableTimes = result;
      });
  }

  isChecked(day: string) {
    console.log(`O estado do checkbox ${day} é: ${this.checkboxState[day]}`);
  }

  showToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Horário adicionado com sucesso.',
      detail: `O horário ${this.newHour} foi adicionado para o dia ${this.daysOfWeek[0]}.`,
    });
  }

  saveHour() {
    this.daysOfWeek.forEach((day) => {
      if (this.checkboxState[day]) {
        this.availableTimesService
          .addAvailableTime({
            day: day,
            hour: this.newHour,
            professionalId: this.professionalId,
          })
          .subscribe((result) => {
            this.loadAvailableTimes();
            this.messageService.add({
              severity: 'success',
              summary: 'Horário adicionado com sucesso.',
              detail: `O horário ${result.hour} foi adicionado à sua agenda.`,
            });
          });
      }
    });

    this.newHour = '';
  }

  horasDisponiveisParaDia(day: string) {
    return this.availableTimes.filter((time) => time.day === day);
  }

  addHour(): void {}

  professional: Professional = {};

  getProfessionalInfo() {
    this.professionalService
      .getProfessional(this.professionalId)
      .subscribe((result) => {
        this.professional = result;
        console.log(this.professional);
        console.log(`O id do profissional é: ${this.professionalId}`);
      });
  }
}
