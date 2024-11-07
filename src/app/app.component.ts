import {Component, OnInit} from "@angular/core";
import { FormsModule } from "@angular/forms";
import {DataService} from "./data.service";
import {DataComponent} from "./data.component";
import {LogService} from "./log.service";

@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule, DataComponent],
    providers: [DataService, LogService],
    template: `
        <data-comp></data-comp>
        <data-comp></data-comp>
    `,
    styles: [`h1 { color: black; }`]
})
export class AppComponent implements OnInit {
    items: string[] = []
    name: string = "";

    constructor(private _dataService: DataService) {
    }

    addData(name: string) {
        this._dataService.addData(name)
    }

    ngOnInit() {
        this.items = this._dataService.getData()
    }
}