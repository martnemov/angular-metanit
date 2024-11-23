import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {DataService} from "./data.service";
import {DataComponent} from "./data.component";
import {LogService} from "./log.service";
import {HttpService} from "./http.service";
import {User} from "./user";

@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule, DataComponent],
    providers: [DataService, LogService],
    template: `
        <div>
            <p>
                <label>Name</label><br>
                <input type="text" name="name" [(ngModel)]="user.name"/>
            <p>
            <p>
                <label>Age</label><br>
                <input type="number" name="age" [(ngModel)]="user.age"/>
            </p>
            <button (click)="submit(this.user)">Отправить</button>
        </div>
        @if (done) {
            <h3>Ответ сервера</h3>
            <div>
                Имя: {{ receivedUser?.name }}<br>
                Возраст: {{ receivedUser?.age }}
            </div>
        }
    `,
    styles: [`h1 {
        color: black;
    }`]
})
export class AppComponent {
    user: User = new User("", 0);
    receivedUser: User | undefined;
    done: boolean = false;

    constructor(private httpService: HttpService) {
    }

    submit(user: User) {
        this.httpService.postData(this.user).subscribe(
            {
                next: (data: any) => {
                    this.receivedUser = data;
                    this.done = true;
                },
                error: error => console.log(error)
            }
        )
    };

}