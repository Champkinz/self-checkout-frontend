import {Component, OnInit} from '@angular/core';
import {BillService} from './bill.service';
import {Product} from "../data/product";

@Component({
    selector: 'app-bill-reciept',
    templateUrl: './bill-reciept.component.html',
    styleUrls: ['./bill-reciept.component.css']
})
export class BillRecieptComponent implements OnInit {
    g: number;
    posts: Post[];
    name='smyh';
    products:Product[];
    phonenumber:string;

    constructor(private billserivce: BillService,) {
    }

    ngOnInit() {
        console.log('phone:'+localStorage.getItem('phonenumber'));
        // console.log('checkout:'+localStorage.getItem('checkoutorder'));
        this.phonenumber = localStorage.getItem('phonenumber');
        this.products = JSON.parse(localStorage.getItem('checkoutorder'));
        console.log('BILL'+JSON.stringify(this.products));

    }
}

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}