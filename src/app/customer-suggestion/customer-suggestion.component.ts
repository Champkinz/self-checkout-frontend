import { Component, OnInit } from '@angular/core';
import {customerSuggestion} from "../data/customersuggestion";
import {dateStruct} from "../data/trending";
import {CustomerBaseService} from "../services/customer-base.service";

@Component({
  selector: 'app-customer-suggestion',
  templateUrl: './customer-suggestion.component.html',
  styleUrls: ['./customer-suggestion.component.css']
})
export class CustomerSuggestionComponent implements OnInit {
  customers:customerSuggestion[];
  dates:dateStruct[];


  constructor(private customersuggestion:CustomerBaseService) { }

  ngOnInit() {
  }

    goto(e){
        e.preventDefault();
        var sdate = e.target.elements[0].value;
        var edate = e.target.elements[1].value;

        var datez = [{startDate: sdate, endDate: edate}];
        this.dates = datez;
        this.customersuggestion.getCustomerSuggestion(JSON.stringify(this.dates)).subscribe((customersug) => {
            this.customers = customersug;
            console.log('customers'+JSON.stringify(this.customers));
                // for(let i=0;i < this.customers.length;i++){
                //     console.log(this.customers[i].customerphone);
                // }
        });
    }

}
