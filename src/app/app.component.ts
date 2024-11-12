import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DataService } from "./data.service";
import { DataComponent } from "./data.component";
import { LogService } from "./log.service";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";

@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule, DataComponent],
    providers: [DataService, LogService],
    template: `
        <div>
            <p>Имя пользователя: {{user?.name}}</p>
            <p>Возраст пользователя: {{user?.age}}</p>
        </div>
    `,
    styles: [`h1 {
        color: black;
    }`]
})
export class AppComponent implements OnInit {
    user: User | undefined;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get("assets/data.json").subscribe({
            next: (data: any) => this.user = new User(data.name, data.age)
        });
    }
}