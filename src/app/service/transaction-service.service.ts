import { Injectable } from '@angular/core';
import { TransactionHistory } from '../entity/transactionHistory';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../entity/transaction';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  private transactionHistory: Array<Transaction>;


  constructor(private http: HttpClient) { }

  getTransactionsHistoric(): Observable<any> {
     return this.http.get('http://localhost:8080/trx/historic');
  }
}
