import {Component, OnInit} from '@angular/core';
import {BillService} from './bill.service';

@Component({
    selector: 'app-bill-reciept',
    templateUrl: './bill-reciept.component.html',
    styleUrls: ['./bill-reciept.component.css']
})
export class BillRecieptComponent implements OnInit {
    g: number;
    posts: Post[];
    name='smyh';

    constructor(private billserivce: BillService,) {
    }

    ngOnInit() {

        this.g = 1;
        this.billserivce.getPost(this.g).subscribe((posts) => {
            this.posts = posts;
            console.log(posts);
        });
    }
}

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}