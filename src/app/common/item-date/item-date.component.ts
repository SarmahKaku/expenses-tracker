import { Component, Input, OnInit } from '@angular/core';

@Component({
      selector: 'app-item-date',
      templateUrl: './item-date.component.html',
      styleUrls: ['./item-date.component.scss']
})
export class ItemDateComponent implements OnInit {
      month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      @Input('itemDate') itemDate:any;

      itemDay:number = 0;;
      itemMonth:string = '';
      itemYear:number = 0;

      itemHours:number = 0;
      itemMinute:number = 0;
      itemSecond:number = 0;
      itemAMPM:string = "AM"

      constructor() { }

      ngOnInit(): void {
            console.log('itemDate',this.itemDate);
            this.formatDate(this.itemDate)

      }

      formatDate(argDate:Date){
            let itemdate = new Date(argDate)
            this.itemDay = itemdate.getDate();
            this.itemMonth = this.month[itemdate.getMonth()];
            this.itemYear = itemdate.getFullYear();

            this.itemHours = itemdate.getHours();
            this.itemMinute = itemdate.getMinutes()
            this.itemSecond = itemdate.getSeconds()

            this.itemAMPM = itemdate.getHours() > 12 ? 'PM' : 'AM';
      }

}
