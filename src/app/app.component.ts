import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {DataService} from "./data.service";
import {LogService} from "./log.service";
import {Router, RouterLink, RouterOutlet} from "@angular/router";

class Item {
    constructor(public id: number,
                public product: string,
                public price: number) {
    }
}

@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule, RouterOutlet, RouterLink],
    providers: [DataService, LogService],
    template: `
        <div>
            <nav>
                <a routerLink="">Главная</a> |
                <a routerLink="/item/5/details">Информация о товаре</a> |
                <a routerLink="/item/5/stat">Статистика товара</a>
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
    item: Item = new Item(1, "", 0);

    constructor(private router: Router) {
    }

    goToItem(myItem: Item) {
        this.router.navigate(
            ["/item/", myItem.id],
            {queryParams: {'product': myItem.product, 'price': myItem.price}}
        )
    }
}