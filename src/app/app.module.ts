import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpensesEntryFormComponent } from './components/expenses-entry-form/expenses-entry-form.component';
import { ExpensesItemComponent } from './components/expenses-item/expenses-item.component';
import { BudgetStatusComponent } from './components/budget-status/budget-status.component';
import { ItemDateComponent } from './common/item-date/item-date.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ExpensesEntryFormComponent,
    ExpensesItemComponent,
    BudgetStatusComponent,
    ItemDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
