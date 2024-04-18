import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recharge } from './recharge';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  private baseUrl = 'http://localhost:8080/recharge/save'; // Adjust the base URL according to your backend server

  constructor(private http: HttpClient) { }

  submitRecharge(recharge: Recharge): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.post<any>(url, recharge);
  }
}
