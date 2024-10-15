import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../Component/maintenance/maintenance.component';
import { MonthlyTransactions } from '../Component/view-data/view-data.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://localhost:7228/api/Transaction/';

  constructor(private http :HttpClient) { }

  upsertTransaction(transaction : Transaction){
    return this.http.post<Transaction>(this.baseUrl + 'Upsert' , transaction)
  }

  getAllTransactions() {
    return this.http.get<Transaction[]>(this.baseUrl + 'GetAll');
  }

  deleteTransaction(id: number) {
    return this.http.delete(this.baseUrl + 'Delete/' + id, {
      responseType: 'text',
    });
  }

  getMonthlyTransactions() {
    return this.http.get<MonthlyTransactions[]>(
      this.baseUrl + 'GetMonthlyTransactions'
    );
  }
}
