import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private baseUrl = environment.API_URL;

  constructor(private http: HttpClient) { }
  
  createAppointment(appointment: any) {
    return this.http.post<any>(`${this.baseUrl}/appointments`, appointment);
  }

  getAppointmentsByProfessional(professionalId: string) {
    return this.http.get<any[]>(`${this.baseUrl}/appointments?professionalId=${professionalId}`);
  }

  deleteAppointment(appointmentId: number) {
    return this.http.delete<any>(`${this.baseUrl}/appointments/${appointmentId}`);
  }

  getAppointmentById(appointmentId: number) {
    return this.http.get<any>(`${this.baseUrl}/appointments/${appointmentId}`);
  }

  
}
