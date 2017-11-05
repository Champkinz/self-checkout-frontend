import { Component, OnInit } from '@angular/core';
import {ItemBaseService} from "../services/item-base.service";
import {trending,dateStruct} from "../data/trending";

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
    trend:trending[];
    sendinfo:dateStruct[];
  constructor(private itemservice:ItemBaseService) { }

  ngOnInit() {
  }

  goto(e){
      e.preventDefault();
      var sdate = e.target.elements[0].value;
      var edate = e.target.elements[1].value;
      var itemcode = e.target.elements[2].value;
      var sndif =[{startDate:sdate,endDate:edate}];

      this.sendinfo = sndif;

      this.itemservice.getItemInformation(JSON.stringify(this.sendinfo),itemcode).subscribe((iteminfo) => {
          this.trend = iteminfo;
          console.log(this.trend);
      });
  }

}
