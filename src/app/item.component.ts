import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable, Subscription, switchMap} from "rxjs";

@Component({
    selector: "item-info",
    standalone: true,
    template: `<h2>Модель {{ id }}</h2>
    <div>Товар {{ product }}</div>
    <div>Цена {{ price }}</div>`
})
export class ItemComponent implements OnInit {

    id: number | undefined;
    price: number | undefined;
    product: string | undefined;

    constructor(private route: ActivatedRoute){}
    ngOnInit() {
        this.route.params.subscribe((params) => this.id = params['id']);
        this.route.queryParams.subscribe((queryParams: Observable<Params>) => {
            this.price = queryParams['price'];
            this.product = queryParams['product'];
        })
    }
}