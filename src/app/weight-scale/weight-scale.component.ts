import {Component, OnInit} from '@angular/core';
import {Product} from "../data/product";
import {WeightTolerateService} from "../services/weight-tolerate.service";
import {weightTolerate} from "../data/weightTolerate";
import index from "@angular/cli/lib/cli";
import {_MatHeaderCell} from "@angular/material";
import {Router} from "@angular/router";

@Component({
    selector: 'app-weight-scale',
    templateUrl: './weight-scale.component.html',
    styleUrls: ['./weight-scale.component.css']
})
export class WeightScaleComponent implements OnInit {
    ll: any;
    weighttolrnc:weightTolerate[];
    weightType: string;
    arr1: any;
    helpcustomer:string;

    constructor(private weighttol:WeightTolerateService,private router:Router) {
    }

    ngOnInit() {

    }

    onClickItem(e) {
        e.preventDefault();
        this.weightType = e.target.elements[0].value;

        if (this.weightType[this.weightType.length-2] == 'k'){
            var finalweight=this.weightType.slice(0,-2);
            var fnl = +finalweight*1000;
        }else{
            var finalweight=this.weightType.slice(0,-1);
            var fnl = +finalweight;
        }

        this.weighttol.getWeightTolerance().subscribe((weight) => {
            this.weighttolrnc = weight;console.log(this.weighttolrnc);
        });
        // console.log(this.ll);
    }

    checktolerance(e){

        e.preventDefault();
        var minWeight = 50;
        var maxWeight = 10000;
        var maxTolerateWeight = 100;
        var minTolerateWeight = 10;
        var maxvaltake = e.target.elements[0].value;
        var actualweight = 923;

        var steps = maxWeight/minWeight;
        console.log('steps: '+steps);
        var increasingWeightTolerateAmount = (maxTolerateWeight - minTolerateWeight) / steps;
        console.log('incrtamnt: '+ increasingWeightTolerateAmount);
        var givenrangemaxval = 50 * Math.ceil(actualweight/50);
        console.log('givenrangemaxval: ' + givenrangemaxval);
        var indexforgivenrange = givenrangemaxval/minWeight;
        console.log('index of given range'+indexforgivenrange);
        var tolerateweightforthegivenrange = (indexforgivenrange - 1) * increasingWeightTolerateAmount;
        tolerateweightforthegivenrange = tolerateweightforthegivenrange + minTolerateWeight;
        tolerateweightforthegivenrange = Math.round(tolerateweightforthegivenrange);
        console.log('toleraterateforgvnamnt: '+ (tolerateweightforthegivenrange));
        var findperforgvnrange = tolerateweightforthegivenrange/givenrangemaxval * 100;



        // testing purposes
        findperforgvnrange = Math.round(findperforgvnrange);
        console.log(findperforgvnrange);
        var testamount = actualweight * findperforgvnrange / 100;
        testamount = Math.round(testamount);
        console.log(testamount);

        if(maxvaltake <= (actualweight+tolerateweightforthegivenrange)){
            this.router.navigate(['bill']);
        }else {
            this.helpcustomer = 'wait for assistant help';
        }
    }

    clearStorage() {
        localStorage.clear();
    }

}
