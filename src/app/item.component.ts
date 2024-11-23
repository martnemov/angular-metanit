import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription, switchMap} from "rxjs";

@Component({
    selector: "item-info",
    standalone: true,
    template: `<h2>Модель {{ id }}</h2>`
})
export class ItemComponent implements OnInit {

    id: number | undefined;

    constructor(private route: ActivatedRoute){}
    ngOnInit() {
        this.route.paramMap.subscribe(console.log)
        this.route.paramMap.pipe(
            switchMap(params => params.get("id"))
        )
            .subscribe(data=> this.id = +data);
    }
}