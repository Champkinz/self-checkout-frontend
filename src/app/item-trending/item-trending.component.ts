import { Component, OnInit } from '@angular/core';
import {ItemBaseService} from "../services/item-base.service";
import {trending} from "../data/trending";

@Component({
  selector: 'app-item-trending',
  templateUrl: './item-trending.component.html',
  styleUrls: ['./item-trending.component.css']
})
export class ItemTrendingComponent implements OnInit {
  trend:trending[];
  constructor(private trending:ItemBaseService) { }

  ngOnInit() {
      this.trending.getItemTrending().subscribe((trending) => {
        this.trend=trending;console.log(this.trend);
      });
  }

}
