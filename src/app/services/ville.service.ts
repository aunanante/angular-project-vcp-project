import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Ville } from '../common/ville';

const villeUrl = environment.authVille;

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private httpClient: HttpClient) { }

  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getAllVilles(): Observable<Ville[]> {
    const headers = this.getHeaders();
    return this.httpClient.get<Ville[]>(villeUrl+'/', { headers });
  }

  getVille(id: number): Observable<Ville> {
    const headers = this.getHeaders();
    return this.httpClient.get<any>(villeUrl+'/'+id, { headers })
    
  }

  createVille(ville: Ville): Observable<Ville> {
    const headers = this.getHeaders();
    return this.httpClient.post<any>(villeUrl+'/', ville, { headers });
  }

  updateVille(id: string, ville: Ville): Observable<Ville> {
    const headers = this.getHeaders();
    return this.httpClient.put<any>(villeUrl+'/'+id, ville, { headers });
  }

  deleteVilles(id: number): Observable<void> {
    const headers = this.getHeaders();
    return this.httpClient.delete<any>(villeUrl+'/'+id, { headers });
  }
  
  



}
