import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-checkout-view-customer',
  templateUrl: './checkout-view-customer.component.html',
  styleUrls: ['./checkout-view-customer.component.css']
})
export class CheckoutViewCustomerComponent implements OnInit {

  displayedColumns = ['code', 'name', 'price', 'weight'];
  dataSource = new ExampleDataSource();
  itemData = [
  {
		code: "A123",
		name: "Sugar",
    price: "112.00",
    weight: "1Kg"
  },
	{code: "A124",
  name: "Dhal",
  price: "60.00",
  weight: "1Kg"
	},
	{
  code: "A125",
  name: "Butter",
  price: "150.00",
  weight: "500g"
	},
	{
  code: "A126",
  name: "Apple",
  price: "73.00",
  weight: "157g"
	},
	{
  code: "A127",
  name: "Olive Oil",
  price: "110.00",
  weight: "902g"
	},
	{
  code: "A128",
  name: "Bread - Prima",
  price: "155.00",
  weight: "250g"
	},
	{
  code: "A129",
  name: "Brown Bread - Prima",
  price: "175.00",
  weight: "200g"
  },
  {
  code: "A130",
  name: "Potato Chips - Rancrisp",
  price: "120.00",
  weight: "40g"
  },
  {
  code: "A131",
  name: "Pen - A",
  price: "45.00",
  weight: "10g"
  },
  {
  code: "A132",
  name: "Banana",
  price: "78.00",
  weight: "97g"
  },]

  str: string;
  selectedHero = '';

  constructor() { }

  ngOnInit() {
  }

  
 onClickItem(itemCode: string) {
  if(this.sampleData(itemCode) !=null){
data.push(this.sampleData(itemCode));
  }


this.dataSource = new ExampleDataSource();
console.log(itemCode);
}

sampleData(itemCode: string): any{
  let value;
  for(let res of this.itemData){
    console.log("code is "+res.code);
    if(res.code == itemCode ){
      console.log("code ok " + res.code)
      value = res
    }
   }
return value;
}
}

export interface Element {
 code: string;
 name: string;
 price: string;
 weight: string;
}

let data: Element[] = [];

export class ExampleDataSource extends DataSource<any> {
 /** Connect function called by the table to retrieve one stream containing the data to render. */
 connect(): Observable<Element[]> {
   console.log(JSON.stringify(data));
   return Observable.of(data);
 }

 disconnect() {}
}

