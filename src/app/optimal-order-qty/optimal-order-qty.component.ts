import {Component, OnInit} from '@angular/core';
import {optimalorder} from "../data/optimalorder";
import {dateStruct} from "../data/trending";
import {OptimalQtyService} from "../services/optimal-qty.service";
import {optimaldisplay} from "../data/optimalorder";

@Component({
    selector: 'app-optimal-order-qty',
    templateUrl: './optimal-order-qty.component.html',
    styleUrls: ['./optimal-order-qty.component.css']
})
export class OptimalOrderQtyComponent implements OnInit {
    orderoptimal: optimalorder[];
    dates: dateStruct[];
    anwer: number;
    disdata: optimaldisplay[];

    increment:number;
    decrement:number;

    constructor(private oporder: OptimalQtyService) {
    }

    ngOnInit() {
    }

    goto(e) {
        e.preventDefault();
        var sdate = e.target.elements[0].value;
        var edate = e.target.elements[1].value;

        var datez = [{startDate: sdate, endDate: edate}];
        this.dates = datez;
        this.oporder.getOptimalOrderQty(JSON.stringify(this.dates)).subscribe((optmlorderqty) => {
            this.orderoptimal = optmlorderqty;
            console.log(this.orderoptimal);
            var mns = 0;
            var inc = 0;
            var temp = [];

            for (var i = 0; i < this.orderoptimal.length; i++) {
                // var y = +this.orderoptimal[i+1].qtysold - +this.orderoptimal[i].qtysold;
                // console.log(this.orderoptimal[i].qtysold);

                // var firsqtysold = +this.orderoptimal[i+1].qtysold;
                // var secondqtysold = +this.orderoptimal[i].qtysold;
                // this.anwer = firsqtysold - secondqtysold;
                // console.log('difrnc of qty sold' + anwer);

                // if(0>this.anwer){
                //     mns+=this.anwer;
                //     console.log('minusstuff: '+ mns);
                // }else{
                //     inc+=this.anwer;
                //     console.log('plussstuff: '+ inc);
                // }
                console.log('this is I:' + i);
                // temp[i]  = {month:i+1,qtysold:+this.orderoptimal[i].qtysold,sellingrate:0};
                // console.log(JSON.stringify(temp));
                // this.disdata = temp;
                // console.log(this.disdata);
                if (i === 0) {
                    temp[i] = {month: i + 1, qtysold: +this.orderoptimal[i].qtysold, sellingrate: 0};
                } else {
                    temp[i] = {
                        month: i + 1, qtysold: +this.orderoptimal[i].qtysold,
                        sellingrate: (+this.orderoptimal[i].qtysold) - (+this.orderoptimal[i - 1].qtysold)
                    };
                }


                if(0 > temp[i].sellingrate){
                    mns+=temp[i].sellingrate;
                }else{
                    inc+=temp[i].sellingrate;
                }
            }
            this.disdata = temp;
            console.log(this.disdata);
            console.log('incre'+inc);
            console.log('dec'+mns);

            this.increment = inc;
            this.decrement = mns;

        });
    }

}
