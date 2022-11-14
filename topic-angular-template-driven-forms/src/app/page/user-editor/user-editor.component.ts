import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  user$: Observable<User> = this.ar.params.pipe(
    switchMap( params => this.userService.get( params['id'] ) ),
  );

  constructor(
    private ar: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(user: User): void {
    this.userService.update(user).subscribe(
      user => this.router.navigate(['/', 'user']),
    );
  }

}
