import { Component, OnInit } from '@angular/core';

@Component({
      selector: 'app-dashboard',
      templateUrl: './dashboard.component.html',
      styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

      expensesDetails: Array<object> = [
            {
                  "itemname":"Rice",
                  "itemdesc":"Biriyani Rice for friends",
                  "itemprice":230,
                  "itemquantity":2,
                  "date":"Thu Jun 01 2023 10:08:41 GMT+0530 (India Standard Time)"
            },
            {
                  "itemname":"Egg",
                  "itemdesc":"Eggs",
                  "itemprice":45,
                  "itemquantity":6,
                  "date":"Thu Jun 10 2023 18:48:41 GMT+0530 (India Standard Time)"
            },
            {
                  "itemname":"Dal",
                  "itemdesc":"Dal",
                  "itemprice":430,
                  "itemquantity":5,
                  "date":"Thu May 23 2023 12:38:41 GMT+0530 (India Standard Time)"
            }
      ]
      totalExpenses: number = 0;

      constructor() { }

      ngOnInit(): void {
      }

}
