import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from '../models/contract.model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private apiUrl = 'http://localhost:8080/Contrat';

  constructor(private http: HttpClient) { }

  getAllContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${this.apiUrl}/retrieve-all-contrats`);
  }

  getContractById(id: number): Observable<Contract> {
    return this.http.get<Contract>(`${this.apiUrl}/retrieve-contrat/${id}`);
  }

  createContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>(`${this.apiUrl}/add-contrat`, contract);
  }

  updateContract(id: number, contract: Contract): Observable<Contract> {
    return this.http.put<Contract>(`${this.apiUrl}/update-contrat/${id}`, contract);
  }

  deleteContract(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove-contrat/${id}`);
  }

  getHistoriqueModifications(contractId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieve-historiques/${contractId}`);
  }
}
