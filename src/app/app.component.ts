import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DataService } from "./data.service";
import { DataComponent } from "./data.component";
import { LogService } from "./log.service";
import { User } from "./user";
import {HttpService} from "./http.service";

@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule, DataComponent],
    providers: [DataService, LogService],
    template: `
        <ul>
            @for (user of users; track $index) {
                <li>{{ user?.name }} ({{ user?.age }})</li>
            }
        </ul>
    `,
    styles: [`h1 {
        color: black;
    }`]
})
export class AppComponent implements OnInit {
    users: User[] = [];

    constructor(private httpService: HttpService) {}

    ngOnInit() {
        this.httpService.getData().subscribe({
            next: (data: any) => this.users = data
        });

    }
}