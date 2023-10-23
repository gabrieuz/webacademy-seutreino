import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AvailableTime } from '../model/available-times.interface';

@Injectable({
  providedIn: 'root',
})
export class AvailableTimesService {
  private baseUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAvailableTimes(professionalId: String): Observable<AvailableTime[]> {
    return this.http.get<AvailableTime[]>(
      `${this.baseUrl}/availableTimes/${professionalId}`
    );
  }

  addAvailableTime(availableTime: AvailableTime): Observable<AvailableTime> {
    return this.http.post<AvailableTime>(
      this.baseUrl + '/availableTimes',
      availableTime
    );
  }
}
