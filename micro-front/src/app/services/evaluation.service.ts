import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluation } from '../models/evaluation'; 

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private apiUrl = 'http://localhost:8080/evaluation'; 

  constructor(private http: HttpClient) {}

  // Get all evaluations
  getAllEvaluations(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(`${this.apiUrl}/`);
  }

  // Get evaluation by ID
  getEvaluationById(id: string): Observable<Evaluation> {
    return this.http.get<Evaluation>(`${this.apiUrl}/${id}`);
  }

  // Create new evaluation
  createEvaluation(evaluation: Evaluation): Observable<Evaluation> {
    return this.http.post<Evaluation>(`${this.apiUrl}/`, evaluation);
  }

  // 🆕 Update evaluation
  updateEvaluation(id: string, evaluation: Evaluation): Observable<Evaluation> {
    return this.http.put<Evaluation>(`${this.apiUrl}/evaluations/${id}`, evaluation);
  }

  // Delete evaluation by ID
  deleteEvaluation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
