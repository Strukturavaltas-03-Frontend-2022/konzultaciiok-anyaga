import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = environment.apiUrl;

  entityName: string = 'users';

  list$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getAll(): void {
    this.http.get<User[]>(`${this.apiUrl}${this.entityName}`).subscribe(
      list => this.list$.next(list),
    );
  }

  get(id: number): User {
    id = Number(id);
    const index = this.list$.getValue().findIndex( u => u.id === id );
    return this.list$.getValue()[index];
  }

  update(user: User): Observable<User> {
    return this.http.patch<User>(
      `${this.apiUrl}${this.entityName}/${user.id}`,
      user
    );
  }

}
