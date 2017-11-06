import {Component, OnInit} from '@angular/core';
import 'rxjs/add/observable/of';
import {CheckoutService} from '../services/checkout.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {Product} from "../data/product";
import {Router} from '@angular/router';

@Component({
    selector: 'app-checkout-view-customer',
    templateUrl: './checkout-view-customer.component.html',
    styleUrls: ['./checkout-view-customer.component.css']
})
export class CheckoutViewCustomerComponent implements OnInit {

    elementz: Product[];
    elementz2: Element[];
    val: any;
    displayedColumns = ['id', 'name', 'username', 'phone'];
    dataSource = new ExampleDataSource();
    str: string;
    selectedHero = '';
    product: Product [];

    constructor(private router: Router, private checkoutservice: CheckoutService) {
    }

    ngOnInit() {
        this.val = localStorage.getItem("phonenumber");
        console.log('sessionumber: ' + this.val);
    }

    onClickItem(itemCode) {
        itemCode.preventDefault();
        console.log('entered code'+itemCode.target.elements[0].value);
        var gt = itemCode.target.elements[0].value;
        // var tt = gt.substr(0,tt);
        // console.log('custff string'+tt);
        var tt = gt.indexOf('00');
        var hex = gt.substr(0,tt);
        var qty:number = gt.substr(tt+1);
        if(gt.includes('00')){
            console.log(hex);
            this.sampleData(hex,qty);
        }else{
            this.sampleData(gt,null);
        }
    }


    sampleData(itemCode: string,qty:number): any {
        this.checkoutservice.getProductDetails(itemCode).subscribe((products) => {
            this.elementz = products;
            console.log("products " + JSON.stringify(products));
            console.log(this.elementz);
            let value;
            for (let res of this.elementz) {
                console.log("code is " + res.code);

                    if(qty == null){
                        console.log("code ok " + res.code);
                        value = res;
                        data.push(value);
                        this.dataSource = new ExampleDataSource();
                    }else {
                        console.log("code ok " + res.code);
                        var realprice = +res.price * qty;
                        res.price =realprice.toString();
                        value = res;
                        data.push(value);
                        this.dataSource = new ExampleDataSource();
                    }


            }
        });
    }



    gotoWeight() {
        var x =0;
        for(let res of data){
                if (res.weight[res.weight.length-2] == 'k'){
                    var finalweight=res.weight.slice(0,-2);
                    var fnl = +finalweight*1000;
                }else{
                    var finalweight=res.weight.slice(0,-1);
                    var fnl = +finalweight;
                }
                x+=fnl;
        }
        localStorage.setItem('totalweight',x.toString());
        console.log(x);

        var today:any = new Date();
        var dd:any = today.getDate();
        var mm:any = today.getMonth()+1; //January is 0!
        var yyyy:any = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        today = mm + '/' + dd + '/' + yyyy;
        // console.log(today);

        // for (let res of data) {
        //     console.log('ITEM : ')
        //     console.log(res.code);
        //}

        let temparr=[];
        var tempp;
        for (let res of data){
            tempp = {product_id:res.code, name:res.name, category:res.category,brand:"Local"};
            temparr.push(tempp);
        }
         console.log('temprr'+JSON.stringify(temparr));

        // type billdetails = Array<{ phonenumber: string, products:[] , quantity: number, date: string }>;
        var arr =
            {
                mobile: localStorage.getItem("phonenumber"),
                date :today,
                product: [{"product_id":"","name":"","category":"","brand":""}],
            };
        console.log('arr eka:' + JSON.stringify(arr));
        arr.product = temparr;
        this.checkoutservice.sendBillDetails(arr).subscribe(
            (ar) => console.log(ar)
        );

        this.router.navigate(['weight']);
        localStorage.setItem('checkoutorder',JSON.stringify(data));
        return 'done';
    }

    deleteitem(itemCode: string): any {
        // console.log());
        data.splice(data.findIndex(x => x.code == itemCode), 1);
        this.dataSource = new ExampleDataSource();
    }

    checkObject() {
        console.log(data);
    }
}


export interface Element {
    id: number;
    name: string;
    username: string;
    phone: string;
}

let data: Product[] = [];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Product[]> {
        return Observable.of(data);
    }

    disconnect() {
    }
}























