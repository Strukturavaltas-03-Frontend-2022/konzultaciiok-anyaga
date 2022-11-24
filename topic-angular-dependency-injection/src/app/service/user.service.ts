import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  mockUserList: User[] = [{ "id": 1, "name": "Izabella Bedford", "email": "jamiebad@symantec.com", "category": "Admin" }, { "id": 2, "name": "Amanda Wintle", "email": "hwintle1@ow.ly", "category": "User" }, { "id": 3, "name": "susi Licence", "email": "alicence2@example.com", "category": "Guest" }, { "id": 6, "name": "Sylvester Baugh", "email": "sbaugh5@over-blog.com", "category": "Guest" }, { "id": 7, "name": "Benita McCusker", "email": "bmccusker6@vk.com", "category": "Admin" },];

  apiUrl: string = environment.apiUrl;

  entityName: string = 'users';

  list$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(
    private http: HttpClient
  ) {
    if (sessionStorage['angularUserList']) {
      this.list$.next( JSON.parse(sessionStorage['angularUserList']) );
    } else {
      this.getAll();
    }
  }

  getAll(): void {
    this.http.get<User[]>(`${this.apiUrl}${this.entityName}`).subscribe({
      next: users => {
        sessionStorage['angularUserList'] = JSON.stringify(users);
        this.list$.next(users);
      },
    });
  }

  // getAll(): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.apiUrl}${this.entityName}`);
  //   // return of(this.mockUserList);
  // }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  update(user: User): Observable<User> {
    return this.http.patch<User>(
      `${this.apiUrl}${this.entityName}/${user.id}`,
      user
    );
  }

}
