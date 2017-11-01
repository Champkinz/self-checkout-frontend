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
        var weightscalevalue = fnl;
        var actualweight = +localStorage.getItem('totalweight');
        console.log('locawight'+actualweight);
        var minweight;
        var mintolweight;
        var maxweight;
        var maxtolweight;
        this.weighttol.getWeightTolerance().subscribe((weight) => {
            this.weighttolrnc = weight;console.log(this.weighttolrnc[0].minWeight);
            minweight = this.weighttolrnc[0].minWeight;
            mintolweight = this.weighttolrnc[0].minWeightTolerance;
            maxweight = this.weighttolrnc[0].maxWeight;
            maxtolweight = this.weighttolrnc[0].maxWeightTolerance;
            console.log('this ran');
            this.checktolerance(minweight,maxweight,maxtolweight,mintolweight,weightscalevalue,actualweight);
        });
        console.log(minweight);



        // console.log(this.ll);
    }

    checktolerance(minwg,maxwg,maxtolwg,minwtolwg,wgsclvl,actwg){

        var minWeight = minwg;
        var maxWeight = maxwg;
        var maxTolerateWeight = maxtolwg;
        var minTolerateWeight = minwtolwg;
        var maxvaltake = wgsclvl;
        var actualweight = actwg;

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
        console.log('actualweight'+actualweight);
        var t = actualweight + tolerateweightforthegivenrange;
        console.log('this is t'+t);
        console.log('this is maxvaltake'+maxvaltake);
        if(maxvaltake <= t) {
            this.router.navigate(['bill']);
        }else {
            this.helpcustomer = 'wait for assistant help';
        }
        // var findperforgvnrange = tolerateweightforthegivenrange/givenrangemaxval * 100;
        // testing purposes
        // findperforgvnrange = Math.round(findperforgvnrange);
        // console.log(findperforgvnrange);
        // var testamount = actualweight * findperforgvnrange / 100;
        // testamount = Math.round(testamount);
        // console.log(testamount);
        // console.log('this1'+t);
        // console.log('this2'+maxvaltake);

    }

    clearStorage() {
        localStorage.clear();
    }

}
