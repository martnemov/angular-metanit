import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {DataService} from "./data.service";
import {DataComponent} from "./data.component";
import {LogService} from "./log.service";

class User {
    constructor(
        public name: string,
        public age: number,
        public company: string
    ) {
    }
}

@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule, DataComponent],
    providers: [DataService, LogService],
    template: `
        <div>
            <p>
                <label>User name</label><br>
                <input type="text" [(ngModel)]="newUser.name"/>
            </p>
            <p>
                <label>Age</label><br>
                <input type="number" name="age" [(ngModel)]="newUser.age"/>
            </p>
            <p>
                <label>Company</label><br>
                <select name="text" [(ngModel)]="newUser.company">
                    @for (comp of companies; track $index) {
                        <option [value]="comp">
                            {{ comp }}
                        </option>
                    }
                </select>
            </p>
            <button (click)="addUser()">Add user</button>
        </div>
        <div>
            <h3>List of users</h3>
            <ul>
                @for (user of users; track $index) {
                    <li>{{ user.name }} {{ user.company }} - {{ user.age }}</li>
                }
            </ul>
        </div>
    `,
    styles: [`h1 {
        color: black;
    }`]
})
export class AppComponent {
    newUser = new User("", 18 , "");
    users = [];
    companies = ['Apple', 'Google', 'Amazon'];

    addUser() {
        this.users.push({...this.newUser});
    }
}