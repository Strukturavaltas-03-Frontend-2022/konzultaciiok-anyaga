import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user';

import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  columns: ITableColumn[] = this.config.userTableColumns;

  userList$: Observable<User[]> = this.userService.list$;

  phrase$: BehaviorSubject<string> = this.config.searchPhrase$;

  viewType: 'table' | 'card' = 'table';

  page: number = 1;

  constructor(
    private config: ConfigService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

  onEdit(user: User): void {
    this.router.navigate(['/', 'user', 'edit', user.id]);
  }

}
