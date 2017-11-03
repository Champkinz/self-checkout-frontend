import {Component, OnInit} from '@angular/core';
import {dateStruct, BrandTrend} from "../data/trending";
import {ItemBaseService} from "../services/item-base.service";

@Component({
    selector: 'app-brand-trending',
    templateUrl: './brand-trending.component.html',
    styleUrls: ['./brand-trending.component.css']
})
export class BrandTrendingComponent implements OnInit {
    dates: dateStruct[];
    brandtrend: BrandTrend[];

    constructor(private brandtrending:ItemBaseService) {
    }

    ngOnInit() {
    }

    goto(e) {
        e.preventDefault();
        var sdate = e.target.elements[0].value;
        var edate = e.target.elements[1].value;

        var datez = [{startDate: sdate, endDate: edate}];
        this.dates = datez;
        this.brandtrending.getBrandTrending(JSON.stringify(this.dates)).subscribe((brandtrend) => {
            this.brandtrend = brandtrend;
            console.log(this.brandtrend);
        });
    }

}
