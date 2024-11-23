import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "./user";


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {
    }

    postData(user: User){
        return this.http.post("http://localhost:3000/postuser", user);
    }

    getData(num1: number, num2: number) {
        const params = new HttpParams()
            .set("num1", num1.toString())
            .set("num2", num2.toString());

        return this.http.get("http://localhost:3000/sum", {params});
    }
}
