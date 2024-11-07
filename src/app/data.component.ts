import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {LogService} from "./log.service";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'data-comp',
    standalone: true,
    imports: [
        FormsModule
    ],
    template: `
        <div>
            <div><input [(ngModel)]="newItem"/>
                <button (click)="addItem(newItem)">Добавить</button>
            </div>
            <ul>
                @for (item of items; track $index) {
                    <li>{{ item }}</li>
                }
            </ul>
        </div>`
})
export class DataComponent implements OnInit {
    newItem: string = "";
    items: string[] = [];

    constructor(private dataService: DataService) {
    }

    addItem(name: string) {
        this.dataService.addData(name);
    }

    ngOnInit() {
        this.items = this.dataService.getData();
    }
}
