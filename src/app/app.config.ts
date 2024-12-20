import { provideRouter, Routes } from "@angular/router";
import { ApplicationConfig } from "@angular/core";

// компоненты, которые сопоставляются с маршрутами
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {NotFoundComponent} from "./not-found.component";
import {ItemComponent} from "./item.component";
import {ItemDetailsComponent} from "./item.details.component";
import {ItemStatComponent} from "./item.stat.component";

const itemRoutes: Routes = [
    { path: "details", component: ItemDetailsComponent },
    { path: "stat", component: ItemStatComponent },
]

// определение маршрутов
const appRoutes: Routes =[
    { path: "", component: HomeComponent},
    { path: "about", component: AboutComponent},
    { path: "item/:id", component: ItemComponent, children: itemRoutes},
    { path: "**", component: NotFoundComponent }
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(appRoutes)]
};