import { Component } from '@angular/core';

@Component({
  selector: 'app-professional-schedule',
  templateUrl: './professional-schedule.component.html',
  styleUrls: ['./professional-schedule.component.css']
})
export class ProfessionalScheduleComponent {
  weekSchedule: any[] = [
    { day: 'Segunda', times: ['08:00 AM', '09:00 AM', '10:00 AM'] },
    { day: 'Terça', times: ['08:00 AM', '09:00 AM', '10:00 AM'] },
    { day: 'Quarta', times: ['08:00 AM', '09:00 AM', '10:00 AM'] },
    { day: 'Quinta', times: ['08:00 AM', '09:00 AM', '10:00 AM'] },
    { day: 'Sexta', times: ['08:00 AM', '09:00 AM', '10:00 AM'] },
    { day: 'Sábado', times: ['08:00 AM', '09:00 AM', '10:00 AM'] },
  ];
}
