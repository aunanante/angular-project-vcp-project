import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { Commerce } from '../common/commerce';

const commerceUrl = environment.authCommerce;

@Injectable({
  providedIn: 'root'
})

export class CommerceService {

  constructor(private httpClient: HttpClient) { }

  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getAllCommerces(): Observable<Commerce[]> {
    const headers = this.getHeaders();
    return this.httpClient.get<Commerce[]>(commerceUrl+'/');
  }

  getCommerceByVilleId(id: number): Observable<Commerce[]> {
    const headers = this.getHeaders();
    return this.httpClient.get<any>(commerceUrl+'/Ville/'+id, { headers });
    
  }

  getCommerceById(id: number): Observable<Commerce> {
    const headers = this.getHeaders();
    return this.httpClient.get<any>(commerceUrl+'/'+id, { headers });
    
  }

  createCommerce(commerce: any): Observable<Commerce[]> {
    const headers = this.getHeaders();
    return this.httpClient.post<any>(commerceUrl, commerce, { headers });
    
  }

  updateCommerce(id: number, commerce: Commerce): Observable<Commerce[]> {
    const headers = this.getHeaders();
    return this.httpClient.put<any>(commerceUrl+'/'+id, commerce, { headers });
  }

  deleteCommerces(id: number): Observable<Commerce[]> {
    const headers = this.getHeaders();
    return this.httpClient.delete<any>(commerceUrl+'/'+id, { headers });
  }

}
