import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contactus } from '../model/contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  private baseURL = environment.API_URL;
  constructor(private http: HttpClient) { }

  createContactus(contactus: Contactus){
    return this.http.post(`${this.baseURL}/contactus`, contactus);

  }

  getContactus(id: number) {
    return this.http.get(`${this.baseURL}/contactus/${id}`);
  }

}
