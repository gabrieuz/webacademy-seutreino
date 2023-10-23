import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Announcement } from '../model/announcement';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private baseUrl = environment.API_URL;

  constructor(private http: HttpClient) { }
  getAnnouncement() {
    return this.http.get<any[]>(`${this.baseUrl}/announcements/`);
  }
  getProfessionalById(professionalId: string) {
    return this.http.get<any>(`${this.baseUrl}/professionals/${professionalId}`);
  }
  getProfessions() {
    return this.http.get<any>(`${this.baseUrl}/professions/`)
  }
  getExpertises() {
    return this.http.get<any>(`${this.baseUrl}/expertises/`)
  }
  getLevels() {
    return this.http.get<any>(`${this.baseUrl}/levels/`)
  }
  
  getAvailableTimes(){
    return this.http.get<any>(`${this.baseUrl}/availableTimes/`)
  }
  creatAnnouncement(announcement: Announcement) {
    return this.http.post(`${this.baseUrl}/announcements`, announcement);
  }

  updateAnnouncement(announcementId: string, announcement: any) {
    return this.http.put<any>(`${this.baseUrl}/announcements/${announcementId}`, announcement);
  }
  
}
