import {Component, OnInit} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {DataService} from "./data.service";
import {DataComponent} from "./data.component";
import {LogService} from "./log.service";
import {HttpService} from "./http.service";

@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule, DataComponent],
    providers: [DataService, LogService],
    template: `
        <div>
            <p>
                <label>Введите первое число</label><br>
                <input type="number" name="num1" [(ngModel)]="num1"/>
            <p>
            <p>
                <label>Введите второе число</label><br>
                <input type="number" name="num2" [(ngModel)]="num2"/>
            </p>
            <button (click)="submit()">Отправить</button>
        </div>
        @if (done) {
            <div>Сумма: {{ sum }}</div>
        }
    `,
    styles: [`h1 {
        color: black;
    }`]
})
export class AppComponent implements OnInit {
    num1 = 0;
    num2 = 0;
    done = false;
    sum: number | undefined;

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {

    }

    submit() {
        this.httpService.getData(this.num1, this.num2).subscribe(
            {
                next: (data: any) => {
                    this.sum = data.result;
                    this.done = true;
                }
            }
        )
    };

}