import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from '../models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl = 'http://localhost:8080/Ressource';

  constructor(private http: HttpClient) { }

  getAllResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(`${this.apiUrl}/retrieve-all-ressources`);
  }

  getResourceById(id: number): Observable<Resource> {
    return this.http.get<Resource>(`${this.apiUrl}/retrieve-ressource/${id}`);
  }

  createResource(resource: Resource): Observable<Resource> {
    return this.http.post<Resource>(`${this.apiUrl}/add-ressource`, resource);
  }

  updateResource(id: number, resource: Resource): Observable<Resource> {
    return this.http.put<Resource>(`${this.apiUrl}/modify-ressource`, resource);
  }

  deleteResource(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove-ressource/${id}`);
  }
}
