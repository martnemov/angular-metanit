import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {DataService} from "./data.service";
import {LogService} from "./log.service";
import {HttpService} from "./http.service";
import {User} from "./user";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
    providers: [DataService, LogService],
    template: `
        <div>
            <nav>
                <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Главная</a>
                <a routerLink="/about" routerLinkActive="active">О сайте</a>
                <a routerLink="/item/7">Item 7</a>
                <a routerLink="/item/8">Item 8</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        h1 {
            color: black;
        }

        a {
            padding: 5px
        }

        .active {
            color: red
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