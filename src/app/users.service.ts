import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }


  getUsers() {
    return this.httpClient.get(`${'https://jsonplaceholder.typicode.com/users'}`).pipe(
      map((res) => {
        return res;
      }),
      catchError(err => of('error'))
    );
  }
}
