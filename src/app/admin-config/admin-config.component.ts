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

        type WT = Array<{minWeight: string, minWeightTolerance: string,maxWeight: string,maxWeightTolerance: string,}>;
        var arr: WT = [
            {minWeight: e.target.elements[0].value,
                minWeightTolerance: e.target.elements[1].value,
                maxWeight: e.target.elements[2].value,
                maxWeightTolerance: e.target.elements[3].value },
        ];
        this.weightTldata = arr;
        console.log(this.weightTldata);
    }

}
