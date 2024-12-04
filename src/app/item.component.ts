import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, RouterOutlet} from "@angular/router";
import {Observable, Subscription, switchMap} from "rxjs";

@Component({
    selector: "item-info",
    standalone: true,
    imports: [
        RouterOutlet
    ],
    template: `
        <h1>Товар: {{ id }}</h1>
        <router-outlet></router-outlet>
    `
})
export class ItemComponent{

    id: number | undefined;


    constructor(private route: ActivatedRoute){
        this.route.params.subscribe(params => this.id = params['id']);
    }

}