import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
errMessage: string;
  constructor(private http: HttpClient) {
  }

  getData(): Observable<User[]> {
    return this.http.get("assets/user.json").pipe(
        map((data: any) => {
          const userList = data["userList"];
          return userList.map((user: any) => new User(user.userName, user.userAge));
        }),
        catchError(err => {
            console.log(err.message);
            this.errMessage = err.message;
            return [];
        })
    );
  }
}
