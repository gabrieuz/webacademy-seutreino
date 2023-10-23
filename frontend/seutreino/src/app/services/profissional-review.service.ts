import { Injectable } from '@angular/core';
import { ProfissionalReview } from '../model/profissionalReview.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalReviewService {
  private baseUrl = environment.API_URL+"/professionalReviews";
  
  constructor(private http: HttpClient) { }
  public assess(body: ProfissionalReview): Observable <ProfissionalReview> {
    return this.http.post<ProfissionalReview>(this.baseUrl, body)
  }

  public getProfessionalReviewByProfessional(id:string):Observable <ProfissionalReview[]> {
    return this.http.get<ProfissionalReview[]>(`${this.baseUrl}/byProfessional/${id}`)
  }
}
