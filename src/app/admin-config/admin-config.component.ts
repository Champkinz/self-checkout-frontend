import {Component, OnInit} from '@angular/core';
import {weightTolerate} from "../data/weightTolerate";

@Component({
    selector: 'app-admin-config',
    templateUrl: './admin-config.component.html',
    styleUrls: ['./admin-config.component.css']
})
export class AdminConfigComponent implements OnInit {

    weightTldata: weightTolerate[];
    data: weightTolerate[];

    constructor() {
    }

    ngOnInit() {
    }

    setShopname(e) {
        e.preventDefault();
        console.log(e.target.elements[0].value);
        localStorage.setItem("ShopName", e.target.elements[0].value);
        location.reload();
    }

    weightTolerate(e) {
        e.preventDefault();

        type WT = Array<{minValue: string, minTolerateValue: string,maxValue: string,maxTolerateValue: string,}>;
        var arr: WT = [
            {minValue: e.target.elements[0].value,
                minTolerateValue: e.target.elements[1].value,
                maxValue: e.target.elements[2].value,
                maxTolerateValue: e.target.elements[3].value },
        ];
        this.weightTldata = arr;
        console.log(this.weightTldata);
    }

}
