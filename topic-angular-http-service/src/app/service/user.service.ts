import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = environment.apiUrl;

  endpoint: string = 'users';

  constructor(
    private http: HttpClient,
  ) { }

  getAllWithEvent(callbackFn: Function): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${this.apiUrl}${this.endpoint}`);
    xhr.onload = (ev: ProgressEvent) => {
      const data = JSON.parse((ev.target as XMLHttpRequest).responseText);
      callbackFn(data);
    };
    xhr.send();
  }

  getAllWithPromise(): Promise<User[]> {
    return fetch(`${this.apiUrl}${this.endpoint}`).then(
      (response: Response) => response.json()
    );
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}${this.endpoint}`);
  }

}
