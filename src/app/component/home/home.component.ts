import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from '../../service/transaction-service.service';
import { TransactionHistory } from '../../entity/transactionHistory';
import { Transaction } from '../../entity/transaction';
import { I18nSelectPipe } from '@angular/common';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transactionHistory: Array<Transaction> = new Array();

  constructor(private transactionService: TransactionServiceService) { }

  ngOnInit(): void {
    this.transactionService.getTransactionsHistoric().subscribe(data => {
      console.log(data);
      this.transactionHistory = data;
      console.log(this.transactionHistory);

    });
  }

}
