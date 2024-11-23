import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {DataService} from "./data.service";
import {DataComponent} from "./data.component";
import {LogService} from "./log.service";
import {HttpService} from "./http.service";
import {User} from "./user";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule, DataComponent, RouterOutlet],
    providers: [DataService, LogService],
    template: `
        <div> Angular 18 </div>
        <router-outlet></router-outlet>
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