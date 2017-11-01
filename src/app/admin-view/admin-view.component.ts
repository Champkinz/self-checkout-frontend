import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-admin-view',
    templateUrl: './admin-view.component.html',
    styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
    isStock: boolean = false;
    isFun2: boolean = false;
    shopname:string;
    constructor() {
    }

    ngOnInit() {
        this.shopname = localStorage.getItem("ShopName");
    }

    toggleStock() {
        if (this.isFun2 = true) {
            this.isFun2 = !this.isFun2;
        }
        this.isStock = !this.isStock;
    }

    toggleFunction2() {
        if (this.isStock = true) {
            this.isStock = !this.isStock;
        }
        this.isFun2 = !this.isFun2;
    }
}
