import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
      selector: 'app-expenses-entry-form',
      templateUrl: './expenses-entry-form.component.html',
      styleUrls: ['./expenses-entry-form.component.scss']
})
export class ExpensesEntryFormComponent implements OnInit {
      catagories: string[] = ["Food", "Travel", "Alcohol", "Cigrates", "Cloths", "Investments", "EMI", "Loan"]
      expensesDetails: Array<object> = [];

      constructor() { }

      ngOnInit(): void {
      }

      handleFormSubmit(expensesItem: any) {
            console.log(expensesItem);

            this.expensesDetails.push(expensesItem)
      }

}
