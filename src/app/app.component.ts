import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  arr =
    [
      {
        id: 1,
        source: 'A',
        target: 'B',
        amount: 300,
        description: 'tikkie'
      },
      {
        id: 2,
        source: 'B',
        target: 'C',
        amount: 1000,
        description: 'rent'
      },
      {
        id: 3,
        source: 'A',
        target: 'B',
        amount: 300,
        description: 'tikkie'
      },
      {
        id: 4,
        source: 'A',
        target: 'D',
        amount: 100,
        description: 'groceries'
      },
      {
        id: 5,
        source: 'A',
        target: 'C',
        amount: 250,
        description: 'other'
      }
    ];

  ngOnInit() {
    console.log('duplicate Transaction were', findDuplicateTransactions(this.arr));
  }

}
export interface Transaction {

  id: Number;
  source: String;
  target: String;
  amount: Number;
  description: String;
  // TODO
}
export function findDuplicateTransactions(transactions: Transaction[]): Transaction[] {
  const arr = [];
  transactions.filter(
    (trnsDtl, i) => {
      for (let j = 0; j < transactions.length; j++) {
        if (j != i) {
          let isSource = trnsDtl.source === transactions[j].source;
          let isTarget = trnsDtl.target === transactions[j].target;
          let isAmt = trnsDtl.amount === transactions[j].amount;
          let isDesc = trnsDtl.description === transactions[j].description;
          if (isSource && isTarget && isAmt && isDesc) {
            arr.push(trnsDtl);
          }
        }
      }
    }
  );
  return arr;
}
