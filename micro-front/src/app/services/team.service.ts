import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:8080/equipe';

  constructor(private http: HttpClient) { }

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiUrl}/retrieve-all-equipes`);
  }

  getTeamById(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.apiUrl}/retrieve-equipe/${id}`);
  }

  createTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(`${this.apiUrl}/add-equipe`, team);
  }

  updateTeam(id: number, team: Team): Observable<Team> {
    return this.http.put<Team>(`${this.apiUrl}/update-equipe`, team);
  }

  deleteTeam(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove-equipe/${id}`);
  }
}
