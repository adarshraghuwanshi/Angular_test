import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<any> {
    return this.http.get(`${this.apiUrl}/person`);
  }

  getPerson(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/person/${id}`);
  }

  updatePerson(id: number, person: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/person/${id}`, person);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/person/${id}`);
  }
}
