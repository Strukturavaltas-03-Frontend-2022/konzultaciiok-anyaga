import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'topic-angular-http-service';

  // users: any[] = [];

  // users: Promise<User[]> = Promise.resolve([]);

  users$: Observable<User[]> = this.userService.getAll();

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    // this.userService.getAllWithEvent(
    //   (users: any) => this.users = users,
    // );

    // this.users = this.userService.getAllWithPromise();

    this.users$.subscribe({
      next: (users: User[]) => console.log(users),
      error: (err: Error) => console.error(err),
      complete: () => console.log('users$ observable has been completed'),
    });
  }

}
