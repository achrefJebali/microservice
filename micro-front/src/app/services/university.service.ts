import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from '../models/university.model';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private apiUrl = 'http://localhost:8080/Universite';

  constructor(private http: HttpClient) { }

  getAllUniversities(): Observable<University[]> {
    return this.http.get<University[]>(`${this.apiUrl}/retrieve-all-universites`);
  }

  getUniversityById(id: number): Observable<University> {
    return this.http.get<University>(`${this.apiUrl}/retrieve-universite/${id}`);
  }

  createUniversity(university: University): Observable<University> {
    return this.http.post<University>(`${this.apiUrl}/add-universite`, university);
  }

  updateUniversity(id: number, university: University): Observable<University> {
    return this.http.put<University>(`${this.apiUrl}/update-universite`, university);
  }

  deleteUniversity(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove-universite/${id}`);
  }
}
