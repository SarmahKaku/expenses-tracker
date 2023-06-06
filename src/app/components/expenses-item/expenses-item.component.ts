import { Component, Input, OnInit,OnChanges } from '@angular/core';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
      selector: 'app-expenses-item',
      templateUrl: './expenses-item.component.html',
      styleUrls: ['./expenses-item.component.scss']
})
export class ExpensesItemComponent implements OnInit,OnChanges {
      @Input('expensesData') expensesData: any;
      // @Input('totalExpense') totalExpense :any;

      totalExpense:any = 0;

      constructor(private appService: AppServiceService) { }

      ngOnInit(): void {
            //console.log('>',this.appService);
           this.totalExpense =  this.getTotalExpense(this.expensesData);

      }
      ngOnChanges(){
           // console.log('>>',this.expensesData);


      }

      getTotalExpense(array:any){
            console.log(array);
            let _temp = 0
            array.map( (item:any) =>{
                  _temp += item.itemprice;
            })

            return _temp;
      }



}
