import { Component } from '@angular/core';
import { ProfessionalService } from 'src/app/services/professional.service';
import { AvailableTimesService } from 'src/app/services/available-times.service';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedules-card',
  templateUrl: './schedules-card.component.html',
  styleUrls: ['./schedules-card.component.css']
})
export class SchedulesCardComponent {
  hasAppointments: boolean = false;
  activeIndex: number | undefined;
  constructor(
    private availableTimesService: AvailableTimesService,
    private professionalService: ProfessionalService,
    private appointmentsService: AppointmentsService,
    private router : Router
  ) {}

  // professionalId is get from localStorage
  professionalId: string = localStorage.getItem('userId') || 'Anonynous';


  ngOnInit(): void {}

  async hasAppointmentsForProfessional(professionalId: string): Promise<boolean> {
    try {
      const response = await this.appointmentsService.getAppointmentsByProfessional(professionalId)
        .toPromise();
      if (response && response.length > 0) {
        console.log('Agendamentos retornados:', response);
        return true;
      } else {
        console.log('Nenhum agendamento encontrado.');
        return false;
      }
    } catch (error) {
      console.error('Erro ao verificar agendamentos:', error);
      return false;
    }
  }
  createAnnouncemnet(){
    this.router.navigateByUrl("/service-details")
  }
  
  
}
