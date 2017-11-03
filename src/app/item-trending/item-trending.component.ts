import {Component, OnInit} from '@angular/core';
import {ItemBaseService} from "../services/item-base.service";
import {dateStruct, trending} from "../data/trending";

@Component({
    selector: 'app-item-trending',
    templateUrl: './item-trending.component.html',
    styleUrls: ['./item-trending.component.css']
})
export class ItemTrendingComponent implements OnInit {
    startDate: any;
    endDate: any;
    dates:dateStruct[];
    trend: trending[];

    constructor(private btrending: ItemBaseService) {
    }

    ngOnInit() {
    }

    goto(e){
        e.preventDefault();
        var sdate = e.target.elements[0].value;
        var edate = e.target.elements[1].value;
        // console.log(sdate);
        // console.log('th'+edate);

        var datez =[{startDate:sdate,endDate:edate}];
        this.dates = datez;
        // console.log(this.dates);
        this.btrending.getItemTrending(JSON.stringify(this.dates)).subscribe((trending) => {
            this.trend = trending;
            console.log(this.trend);
        });
    }


}
